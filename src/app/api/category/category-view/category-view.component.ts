import {Component, OnInit} from '@angular/core';
import {Category} from '../model/category';
import {CategoryService} from '../service/category.service';
import {CATEGORY_API_URL, SERVER_URL} from '../../../app.constants';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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


  categoryForm = new FormGroup(
    {
      id: new FormControl({value:'',disabled: true}, Validators.minLength(2)),
      name: new FormControl({value:'',disabled: true}),
      description: new FormControl( {value:'',disabled: true} ),
    });

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
    this.categoryService.getCategoryDetails( url ).subscribe(
      data=>
      {
        this.categoryForm.patchValue({
          id: data.id,
          name: data.name,
          description: data.description
        });
        this.category=data;
      },
      error => {
        console.log(error);
      },
      ()=> console.log('getCategoryDetails() success'));
  }
}
