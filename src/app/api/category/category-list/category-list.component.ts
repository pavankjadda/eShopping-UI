import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../service/category.service';
import {Category} from '../model/category';
import {CATEGORY_API_URL, SERVER_URL} from '../../../app.constants';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit
{
  categories: Category[];

  constructor(private categoryService: CategoryService,
              private spinner: NgxSpinnerService)
  {
  }

  ngOnInit()
  {
    this.getCategories();
  }

  getCategories()
  {

    let url=SERVER_URL+CATEGORY_API_URL+'list';
    this.spinner.show();
    this.categoryService.getCategories(url).subscribe(
      data =>
      {
        this.categories=data;
        this.spinner.hide();
      },
      err =>
      {
        this.spinner.hide();
        console.error( err );
      },
      () =>
      {
        this.spinner.hide();
      } );

    return this.categories;
  }

  categoriesDataAvailable():boolean
  {
    return this.categories!==undefined;
  }
}
