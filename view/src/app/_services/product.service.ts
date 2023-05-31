import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../_model/product/product.model';


const AUTH_API = 'https://anthanhphu.com.vn:8080/api/product/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  body: {}
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) { }

  post(productModel: ProductModel, FileImage: File): Observable<any> {
    const formData: FormData = new FormData () ;
    formData.append('image',FileImage)
    formData.append('name',productModel.name)
    formData.append('description',productModel.description)
    formData.append('category',productModel.category_id)
    return this.http.post(
      AUTH_API + 'post',
      formData
    );
  }
  getAll(params: any): Observable<any> {
    let httpParams = new HttpParams();
    Object.keys(params).forEach((key) => {
     if(params[key]){ // check value default
       httpParams = httpParams.append(key, params[key]);
     }
    });
    return this.http.get(AUTH_API + 'getAll', {params: httpParams} );
  }
  deleteByCode(id: string): Observable<any> {
    httpOptions.body = {_id: id}
    return this.http.delete(
      AUTH_API + 'deleteByCode/' + id, httpOptions
    )
  }
  update(data: ProductModel) :Observable<any>{
    return this.http.put(
      AUTH_API + 'update/' + data._id , {data}
    )
  }
}
