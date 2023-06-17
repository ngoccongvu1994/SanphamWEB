import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IntroduceModel } from '../_model/introduce.model';



const AUTH_API = 'https://anthanhphu.com.vn/api/introduce/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  body: {}
};

@Injectable({
  providedIn: 'root',
})
export class IntroduceService {

  constructor(private http: HttpClient) { }

  post(IntroModel: IntroduceModel): Observable<any> {
    return this.http.post(
      AUTH_API + 'post', IntroModel,
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
  update(data: IntroduceModel) :Observable<any>{
    return this.http.put(
      AUTH_API + 'update/' + data._id , {data}
    )
  }
}
