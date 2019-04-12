import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../model/category';
import {BASIC_AUTH, SERVER_URL} from '../../../app.constants';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit
{

  categoryForm = new FormGroup({
    id: new FormControl({value:'',disabled: true}, Validators.minLength(2)),
    name: new FormControl(''),
  });

  constructor(private categoryService:CategoryService,
              private router:Router,
              private route: ActivatedRoute) {}

  ngOnInit()
  {
    const id = this.route.parent.snapshot.params.id;
    this.categoryForm.controls['id'].patchValue(id,{emitEvent: false});
    //this.route.params.pipe( switchMap((params: ParamMap) => id=params.get('id')));
    //this.route.paramMap.pipe( switchMap((params: ParamMap) => id=params.get('id')));
    //this.categoryForm.controls['id'].patchValue(id,{emitEvent: false});

  }

  updateCategory()
  {
    const category=new Category( this.categoryForm.get( 'id' ).value );
    category.name=this.categoryForm.get('name').value;
    const url=SERVER_URL+'api/v1/category/update';
    const httpOptions={
      headers: new HttpHeaders( {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + BASIC_AUTH} )
    };
    this.categoryService.updateCategory(url,category).subscribe(
      value => {},error1 => {},()=>{
        this.router.navigate(['/category/list']);
      });
  }

}
