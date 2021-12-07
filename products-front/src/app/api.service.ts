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
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getAllPorducts() : Observable<any>{
    return this.http.get(this.baseUrl + 'products/',
    {headers: this.httpHeaders})
  };

  getPorduct(id: number) : Observable<any>{
    return this.http.get(this.baseUrl + 'products/' + id + '/',
    {headers: this.httpHeaders})
  };
}
