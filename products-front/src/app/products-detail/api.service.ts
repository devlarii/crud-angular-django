import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getPorduct(id: number) : Observable<any>{
    return this.http.get(this.baseUrl + 'products/' + id + '/',
    {headers: this.httpHeaders})
  };

  updateProduct(product: { id: number; name: string; description: string; price: string; }) : Observable<any>{
    let body = { name: product.name, price: product.price, description: product.description };
    return this.http.put(this.baseUrl + 'products/' + product.id + '/', body,
    {headers: this.httpHeaders})
  };

  deleteProduct(id: string | number | undefined) : Observable<any>{
    
    return this.http.delete(this.baseUrl + 'products/' + id + '/',
    {headers: this.httpHeaders})
  };

  
}
