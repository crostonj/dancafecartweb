import { CartItem } from '../Models/cartItem';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private CartUrl: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient) {
    this.CartUrl = 'http://localhost:3001/Carts';
  }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.CartUrl, this.httpOptions);
  }
}
