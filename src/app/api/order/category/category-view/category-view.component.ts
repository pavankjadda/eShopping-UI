import {Component, OnInit} from '@angular/core';
import {Category} from '../model/category';
import {CategoryService} from '../service/category.service';
import {CATEGORY_API_URL, SERVER_URL} from '../../../../app.constants';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent implements OnInit
{
  category: Category;
  constructor(private categoryService:CategoryService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit()
  {
    this.getCategory();
  }

  categoryDataAvailable(): boolean
  {
    return this.category!==undefined;
  }

  private getCategory()
  {
    const id = this.route.snapshot.paramMap.get('id');
    const url=SERVER_URL+CATEGORY_API_URL+id;
    this.categoryService.getCategoryDetails( url ).pipe().subscribe(
      data=>{
        this.category=data;
      },
      error => {
        console.log(error);
      },
      ()=> console.log('getCategoryDetails() success'));
    return this.category;
  }
}
