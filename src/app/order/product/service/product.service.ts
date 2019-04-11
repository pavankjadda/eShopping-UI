import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient:HttpClient) { }

  getProducts(url)
  {
    return this.httpClient.get<Product[]>(url);
  }

  createProduct(url: string, product: Product)
  {
    return this.httpClient.post<Product>(url,product);

  }
}
