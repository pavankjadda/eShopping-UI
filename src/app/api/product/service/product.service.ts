import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Manufacturer} from "../../manufacturer/model/manufacturer";
import {Currency} from "../model/currency";
import {Product} from "../model/product";
import {ProductInventory} from "../model/product-inventory";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getProducts(url) {
    return this.httpClient.get<Product[]>(url);
  }

  createProduct(url: string, product: Product) {
    return this.httpClient.post<Product>(url, product);
  }

  getCurrencies(url: string) {
    return this.httpClient.get<Currency[]>(url);
  }

  getProductDetails(url: string) {
    return this.httpClient.get<Product>(url);
  }

  getProductInventory(url: string) {
    return this.httpClient.get<ProductInventory>(url);
  }

  getManufacturers(url: string) {
    return this.httpClient.get<Manufacturer[]>(url);
  }

  updateProduct(url: string, product: Product) {
    return this.httpClient.put<Product>(url, product);
  }

  updateProductInventory(url: string) {
    return this.httpClient.get<ProductInventory>(url);
  }
}
