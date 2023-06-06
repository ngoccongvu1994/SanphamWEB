import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoModel } from '../_model/infoContact.model';



const AUTH_API = 'https://anthanhphu.com.vn:3000/api/info/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  body: {}
};

@Injectable({
  providedIn: 'root',
})
export class InfoService {

  constructor(private http: HttpClient) { }

  post(InfoModel: InfoModel): Observable<any> {
    return this.http.post(
      AUTH_API + 'post', InfoModel,
      httpOptions
    );
  }
  getAll(): Observable<any> {
    return this.http.get(AUTH_API + 'getAll', {});
  }
  delete(id: string): Observable<any> {
    httpOptions.body = {_id: id}
    return this.http.delete(
      AUTH_API + 'delete/' + id, httpOptions
    )
  }
  update(data: InfoModel) :Observable<any>{
    return this.http.put(
      AUTH_API + 'update/' + data._id , {data}
    )
  }
}
