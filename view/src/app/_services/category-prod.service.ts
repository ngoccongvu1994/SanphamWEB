import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryProductModel } from '../_model/product/category_product.model';


const AUTH_API = 'https://anthanhphu.com.vn/api/category/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  body: {}
};

@Injectable({
  providedIn: 'root',
})
export class CategoryProdService {
  constructor(private http: HttpClient) { }
 post(CategoryProductModel: CategoryProductModel): Observable<any> {
    return this.http.post(
      AUTH_API + 'post', CategoryProductModel,
      httpOptions
    );
  }
  getAll(): Observable<any> {
    return this.http.get(AUTH_API + 'getAll', {});
  }
  deleteByCode(code: string): Observable<any> {
    httpOptions.body = {code: code}
    return this.http.delete(
      AUTH_API + 'deleteByCode/' + code, httpOptions
    )
  }
  update(data: CategoryProductModel) :Observable<any>{
    return this.http.put(
      AUTH_API + 'update/' + data._id , {data}
    )
  }
}
