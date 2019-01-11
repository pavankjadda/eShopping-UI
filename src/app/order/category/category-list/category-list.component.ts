import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../service/category.service';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {SERVER_API_URL} from '../../../app.constants';
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

    this.categoryService.getCategories(url).subscribe(
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
