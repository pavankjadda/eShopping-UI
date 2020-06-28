import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";
import {CATEGORY_API_URL} from "../../../app.constants";
import {Category} from "../model/category";
import {CategoryService} from "../service/category.service";

@Component({
  selector: "app-category-new",
  templateUrl: "./category-new.component.html",
  styleUrls: ["./category-new.component.scss"],
})
export class CategoryNewComponent implements OnInit {
  categoryForm = new FormGroup({
    id: new FormControl({ value: "", disabled: true }, Validators.minLength(2)),
    name: new FormControl(""),
    description: new FormControl(""),
  });

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit() {}

  createCategory() {
    const category = new Category(this.categoryForm.get("id").value);
    category.name = this.categoryForm.get("name").value;
    category.description = this.categoryForm.get("description").value;

    const url = environment.BASE_URL + CATEGORY_API_URL + "/create";
    this.categoryService.createCategory(url, category).subscribe(
      (value) => {},
      (error1) => {},
      () => {
        this.router.navigate(["/category/list"]);
      }
    );
  }

  goBack() {
    this.router.navigate(["/category"]);
  }
}
