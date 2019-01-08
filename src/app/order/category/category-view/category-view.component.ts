import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {CategoryService} from '../service/category.service';
import {BASIC_AUTH, SERVER_API_URL} from '../../../app.constants';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit
{
  categoryObservable:  Observable<Category>;
  constructor(private categoryService:CategoryService) { }

  ngOnInit()
  {
    this.getCategory();
  }

  private getCategory()
  {
    const url=SERVER_API_URL+'api/v2/category/'+1;
    const httpOptions={
      headers: new HttpHeaders( {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + BASIC_AUTH} )
    };
    this.categoryService.getCategoryDetails(url,httpOptions).subscribe(
      data=>{
        // @ts-ignore
        this.categoryObservable=data;
        console.log(this.categoryObservable);
      },
      error1 => console.log(error1),
      ()=> console.log('getCategoryDetails() success'));
    return this.categoryObservable;
  }

  categoryDataAvailable(): boolean
  {
    return this.categoryObservable!==undefined;
  }
}
