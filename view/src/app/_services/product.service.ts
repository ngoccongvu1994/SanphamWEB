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

  post(productModel: ProductModel): Observable<any> {
    return this.http.post(
      AUTH_API + 'post',
      {
        name: productModel.name,
        description: productModel.description,
        category: productModel.category,
        price: productModel.price,
        image: productModel.image,
      },
      httpOptions
    );
  }
}
