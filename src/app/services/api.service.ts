import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(username: unknown, password: unknown) {
    return this.http.post('login', { username, password });
  }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>('products', {
      headers: {},
    })
  }
}
