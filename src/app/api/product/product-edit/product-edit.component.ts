import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductInventory} from "src/app/api/product/model/product-inventory";
import {
  CATEGORY_API_URL,
  CURRENCY_API_URL,
  INVENTORY_API_URL,
  MANUFACTURER_API_URL,
  PRODUCT_API_URL,
} from "src/app/app.constants";
import {environment} from "src/environments/environment";
import {Category} from "../../category/model/category";
import {CategoryService} from "../../category/service/category.service";
import {Manufacturer} from "../../manufacturer/model/manufacturer";
import {Currency} from "../model/currency";
import {Product} from "../model/product";
import {ProductService} from "../service/product.service";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.scss"],
})
export class ProductEditComponent implements OnInit {
  product: Product;
  categories: Array<Category>;
  currencies: Array<Currency>;
  manufacturers: Array<Manufacturer>;

  productForm = new FormGroup({
    id: new FormControl({ value: "", disabled: true }),
    name: new FormControl(""),
    description: new FormControl(""),
    quantity: new FormControl(""),
    price: new FormControl(""),
    amount: new FormControl(""),
    categoryControl: new FormControl(null),
    currency: new FormControl(""),
    manufacturerControl: new FormControl(null),
  });

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.loadCurrencies();
    this.loadManufacturers();
    this.getProduct();
  }

  private getProduct() {
    const id = this.route.snapshot.paramMap.get("id");
    const url = environment.BASE_URL + PRODUCT_API_URL + "/find/" + id;
    this.productService
      .getProductDetails(url)
      .pipe()
      .subscribe(
        (data) => {
          this.product = data;
          this.productForm.patchValue({
            id: data.id,
            name: data.name,
            description: data.description,
            price: data.price,
            amount: data.price.amount,
            currency: data.price.currency,
            categoryControl: data.category,
            manufacturerControl: data.manufacturer,
          });
          this.getProductInventory(id);
        },
        (error) => {
          console.log(error);
        },
        () => console.log("getProduct() success")
      );
  }

  private getProductInventory(id: string) {
    const url = environment.BASE_URL + INVENTORY_API_URL + "/product/" + id;
    this.productService
      .getProductInventory(url)
      .pipe()
      .subscribe(
        (data) => {
          this.productForm.patchValue({
            quantity: data.quantity,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  private updateProduct() {
    const id = this.route.snapshot.paramMap.get("id");
    const url = environment.BASE_URL + PRODUCT_API_URL + "/update";

    const product = new Product();
    product.id = Number(id);
    product.name = this.productForm.value.name;
    product.description = this.productForm.value.description;

    let productInventory = new ProductInventory();
    productInventory.quantity = this.productForm.value.quantity;
    product.productInventory = productInventory;
    product.category = this.productForm.value.categoryControl;
    product.manufacturer = this.productForm.value.manufacturerControl;
    product.price = this.productForm.value.price;
    product.price.amount = this.productForm.value.amount;

    this.productService.updateProduct(url, product).subscribe(
      (value) => {
        console.log("Successfully updated product");
      },
      (error1) => {
        console.log("Failed to update product");
      },
      () => {
        this.router.navigate(["/product/list"]);
      }
    );
  }

  private loadCategories() {
    const url = environment.BASE_URL + CATEGORY_API_URL + "/list";

    this.categoryService.getCategories(url).subscribe(
      (categories) => {
        this.categories = categories;
        console.log("Successfully loaded categories");
      },
      (error1) => {
        console.log("Failed to load categories");
      },
      () => {}
    );
  }

  private loadCurrencies() {
    const url = environment.BASE_URL + CURRENCY_API_URL + "/list";

    this.productService.getCurrencies(url).subscribe(
      (currencies) => {
        this.currencies = currencies;
      },
      (error1) => {
        console.log("Failed to load currencies");
      },
      () => {}
    );
  }

  private loadManufacturers() {
    const url = environment.BASE_URL + MANUFACTURER_API_URL + "/list";

    this.productService.getManufacturers(url).subscribe(
      (manufacturers) => {
        this.manufacturers = manufacturers;
        console.log("Successfully loaded manufacturers");
      },
      (error1) => {
        console.log("Failed to load manufacturers");
      },
      () => {}
    );
  }

  productDataAvailable(): boolean {
    return this.product !== undefined;
  }

  compareCategoryFn(c1: Category, c2: Category): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  compareManufacturerFn(c1: Manufacturer, c2: Manufacturer): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  goBack() {
    this.router.navigate([
      "/product/" + this.route.snapshot.paramMap.get("id"),
    ]);
  }
}
