import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Category} from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService
{

  constructor(private httpClient:HttpClient) { }

  getCategories(url, httpOptions)
  {
    return this.httpClient.get<Category[]>(url,httpOptions);
  }
}
