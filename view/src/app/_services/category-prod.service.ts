import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryProductModel } from '../_model/product/category_product.model';


const AUTH_API = 'http://localhost:8080/api/category_product/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class CategoryProdService {
  constructor(private http: HttpClient) { }
 post(CategoryProductModel: CategoryProductModel): Observable<any> {
    return this.http.post(
      AUTH_API + 'post',
      {
        name: CategoryProductModel.name,
        description: CategoryProductModel.description,
        category: CategoryProductModel.category,
        category_parent: CategoryProductModel.category_parent,
        code: CategoryProductModel.code,
      },
      httpOptions
    );
  }
  getAll(): Observable<any> {
    return this.http.get(AUTH_API + 'getAll', {});
  }
}
