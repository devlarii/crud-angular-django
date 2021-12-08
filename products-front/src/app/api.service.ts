import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getProduct(id: any) {
    throw new Error('Method not implemented.');
  }
  baseUrl = 'http://localhost:8000/';
  token = 'Token 89b4e2883e74b105b3b29431754c3efc965da283';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token);

  constructor(private http: HttpClient) { }

  getAllPorducts() : Observable<any>{
    return this.http.get(this.baseUrl + 'products/',
    {headers: this.httpHeaders})
  };

  getPorduct(id: number) : Observable<any>{
    return this.http.get(this.baseUrl + 'products/' + id + '/',
    {headers: this.httpHeaders})
  };
  saveNewProduct(product: { name: string; description: string; price: string; }) : Observable<any>{
    return this.http.post(this.baseUrl + 'products/', product,
    {headers: this.httpHeaders})
  };
}
