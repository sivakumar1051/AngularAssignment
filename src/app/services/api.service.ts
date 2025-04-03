import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

interface ProductResponse {
  products: Product[];
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductResponse>(this.apiUrl).pipe(
      map((response: ProductResponse) => response.products.slice(0, 6))
    );
  }
}
