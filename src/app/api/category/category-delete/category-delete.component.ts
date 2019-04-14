import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../service/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SERVER_URL} from '../../../app.constants';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit
{
  categoryForm = new FormGroup({
    id: new FormControl({value:'',disabled: true}, Validators.minLength(2)),
    name: new FormControl({value:'',disabled: true}),
  });

  constructor(private categoryService:CategoryService,
              private router:Router,
              private route: ActivatedRoute) {}

  ngOnInit()
  {
    const id = this.route.parent.snapshot.params.id;
    this.categoryForm.controls['id'].patchValue(id,{emitEvent: false});
  }

  deleteCategory()
  {
    const id=this.categoryForm.get('id').value;
    if(confirm('Do you want to delete this Category with Id:'+id+'?'))
    {
      const url=SERVER_URL+'api/v1/category/delete/'+id;
      this.categoryService.deleteCategory(url).subscribe(
        value => {},error1 => {},()=>{
          this.router.navigate(['/category/list']);
        });
    }
  }
}
