import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URLBase: String = 'https://localhost:8080/product/';

  constructor(private http: HttpClient) { }

  public getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.URLBase + 'list');
  }

  public getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(this.URLBase + `detail/${id}`); 
  }

  public getProductByName(name: string): Observable<Product>{
    return this.http.get<Product>(this.URLBase + `detailName/${name}`);
  }

  public create(product:Product): Observable<any>{
    return this.http.post<any>(this.URLBase + 'create', product)
  }

  public update(id:number, product:Product): Observable<any>{
    return this.http.put<any>(this.URLBase + `update/${id}`, product);
  }

  public delete(id:number):Observable<any>{
    return this.http.delete<any>(this.URLBase + `delete/${id}`)
  }
}
