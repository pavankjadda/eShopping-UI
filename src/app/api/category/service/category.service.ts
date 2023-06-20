import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Category } from "../model/category";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  httpClient = inject(HttpClient);

  getCategories(url) {
    return this.httpClient.get<Category[]>(url);
  }

  createCategory(url, category) {
    return this.httpClient.post(url, category);
  }

  getCategoryDetails(url) {
    return this.httpClient.get<Category>(url);
  }

  updateCategory(url: string, category: Category) {
    return this.httpClient.put(url, category);
  }

  deleteCategory(url: string) {
    return this.httpClient.delete(url);
  }
}
