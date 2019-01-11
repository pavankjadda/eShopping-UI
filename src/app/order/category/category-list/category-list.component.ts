import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../service/category.service';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {SERVER_API_URL} from '../../../app.constants';
import {HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../../core/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit
{
  categoryObservable: Observable<Category[]>;
  constructor(private categoryService:CategoryService, private authService:AuthService, private router: Router)
  {
  }

  ngOnInit()
  {
    this.getCategories();
  }

  getCategories()
  {
    let url=SERVER_API_URL+'api/v2/category/list';
    let httpOptions;
    if(this.authService.currentUserValue.token!== '')
    {
      httpOptions={
        headers: new HttpHeaders( {
          'Content-Type': 'application/json',
          'X-Auth-Token': this.authService.currentUserValue.token} )
      };
    }
    else
    {
      this.router.navigate(['/login']);
    }


    this.categoryService.getCategories(url,httpOptions).subscribe(
      data => {
        // @ts-ignore
        this.categoryObservable=data;
      },
      err => console.error( err ),
      () => console.log( 'Categories retrieved from backend' ) );
    return this.categoryObservable;
  }

  categoriesDataAvailable():boolean
  {
    return this.categoryObservable!==undefined;
  }
}
