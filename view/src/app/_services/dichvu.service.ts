import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryProductModel } from '../_model/product/category_product.model';
import { DichVuModel } from '../_model/dichvu.model';


const AUTH_API = 'http://localhost:8080/api/dichvu/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  body: {}
};

@Injectable({
  providedIn: 'root',
})
export class DichVuService {
  constructor(private http: HttpClient) { }
 post(DichVuModel: DichVuModel): Observable<any> {
    return this.http.post(
      AUTH_API + 'post', DichVuModel,
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
  update(data: DichVuModel) :Observable<any>{
    return this.http.put(
      AUTH_API + 'update/' + data._id , {data}
    )
  }
}
