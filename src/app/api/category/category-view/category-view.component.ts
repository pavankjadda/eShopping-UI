import { Component, OnInit } from "@angular/core";
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from "@angular/router";
import { environment } from "../../../../environments/environment";
import { CATEGORY_API_URL } from "../../../app.constants";
import { Category } from "../model/category";
import { CategoryService } from "../service/category.service";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-category-view",
  templateUrl: "./category-view.component.html",
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule, RouterLink, RouterOutlet],
})
export class CategoryViewComponent implements OnInit {
  category: Category;
  categoryForm = new UntypedFormGroup({
    id: new UntypedFormControl(
      { value: "", disabled: true },
      Validators.minLength(2),
    ),
    name: new UntypedFormControl({ value: "", disabled: true }),
    description: new UntypedFormControl({ value: "", disabled: true }),
  });

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getCategory();
  }

  categoryDataAvailable(): boolean {
    return this.category !== undefined;
  }

  private getCategory() {
    const id = this.route.snapshot.paramMap.get("id");
    const url = environment.BASE_URL + CATEGORY_API_URL + "/" + id;
    this.categoryService.getCategoryDetails(url).subscribe(
      (data) => {
        this.categoryForm.patchValue({
          id: data.id,
          name: data.name,
          description: data.description,
        });
        this.category = data;
      },
      (error) => {
        console.log(error);
      },
      () => console.log("getCategoryDetails() success"),
    );
  }
}
