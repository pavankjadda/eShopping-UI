import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms';
import {BASIC_AUTH, SERVER_API_URL} from '../../../app.constants';
import {HttpHeaders} from '@angular/common/http';
import {CategoryService} from '../service/category.service';
import {Category} from '../model/category';
import {Router} from '@angular/router';

@Component( {
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
} )
export class CategoryNewComponent implements OnInit
{
  categoryForm = new FormGroup({
    id: new FormControl({value:'',disabled:true}, Validators.minLength(2)),
    name: new FormControl(''),
  });

  constructor(private categoryService:CategoryService, private router:Router) {}

  ngOnInit()
  {
  }

  createCategory()
  {
    const category=new Category();
    category.id=this.categoryForm.get('id').value;
    category.name=this.categoryForm.get('name').value;
    category.createdBy='Pavan';
    category.createdDate='';
    category.lastModifiedBy='Pavan';
    category.lastModifiedDate='Pavan';


    const url=SERVER_API_URL+'api/v2/category/create';
    const httpOptions={
      headers: new HttpHeaders( {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + BASIC_AUTH} )
    };
    this.categoryService.createCategory(url,httpOptions,category).subscribe(
      value => {},error1 => {},()=>{
        this.router.navigate(['/category/list']);
      });
  }

}
