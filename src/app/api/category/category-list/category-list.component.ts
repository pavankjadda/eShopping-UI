import {Component, OnInit} from "@angular/core";
import {NgxSpinnerService} from "ngx-spinner";
import {environment} from "../../../../environments/environment";
import {CATEGORY_API_URL} from "../../../app.constants";
import {Category} from "../model/category";
import {CategoryService} from "../service/category.service";

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.scss"],
})
export class CategoryListComponent implements OnInit {
  categories: Category[];

  constructor(
    private categoryService: CategoryService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    let url = environment.BASE_URL + CATEGORY_API_URL + "/list";
    this.spinner.show();
    this.categoryService.getCategories(url).subscribe(
      (data) => {
        this.categories = data;
        this.spinner.hide();
      },
      (err) => {
        this.spinner.hide();
        console.error(err);
      },
      () => {
        this.spinner.hide();
      }
    );

    return this.categories;
  }

  categoriesDataAvailable(): boolean {
    return this.categories !== undefined;
  }
}
