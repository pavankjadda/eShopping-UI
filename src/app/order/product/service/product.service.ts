import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product';
import {Currency} from '../model/currency';

@Injectable({
  providedIn: 'root'
})
export class ProductService
{
  constructor(private httpClient:HttpClient) { }

  getProducts(url)
  {
    return this.httpClient.get<Product[]>(url);
  }

  createProduct(url: string, product: Product)
  {
    return this.httpClient.post<Product>(url,product);

  }

  getCurrencies(url: string)
  {
    return this.httpClient.get<Currency[]>( url );
  }

  getProductDetails(url: string)
  {
    return this.httpClient.get<Product>( url );
  }
}
