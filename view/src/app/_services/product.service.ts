import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../_model/product/product.model';


const AUTH_API = 'http://localhost:8080/api/product/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
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
    formData.append('category',productModel.category)
    //  let body = {
    //   name : productModel.name,
    //   description : productModel.description,
    //   category : productModel.category,
    // }
    return this.http.post(
      AUTH_API + 'post',
      formData
    );
  }
  getAll(): Observable<any> {
    return this.http.get(AUTH_API + 'getAll', {});
  }
}
