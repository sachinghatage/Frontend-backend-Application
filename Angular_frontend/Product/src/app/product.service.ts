import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl:string='http://localhost:8080/api/v1/product';

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/getAll`);
  }

  saveProduct(product:Product):Observable<any>{
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(`${this.baseUrl}/save`, product, { headers: headers });
  }

  deleteProduct(id:number):Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/remove/${id}`);
  }

  updateProduct(product:Product,id:number){
    const headers=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put<Product>(`${this.baseUrl}/update/${id}`,product,{headers:headers});
  }
}
