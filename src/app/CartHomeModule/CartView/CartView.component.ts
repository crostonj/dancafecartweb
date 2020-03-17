import { CartItem } from './../../../Models/cartItem';
import { CartService } from './../../../Services/cart-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartvew',
  templateUrl: './CartView.component.html',
  styleUrls: ['./CartView.component.css']
})
export class CartViewComponent implements OnInit {

  cartItems: CartItem[];
  cartTotal: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {

    this.cartTotal = 0.0;
    this.cartService.getCartItems().subscribe({
        next: (items: CartItem[]) => {
          this.cartItems = items;
          this.cartTotal = this.calculateCartTotal(items);
        },
        error: () => {
          console.log('Error my getting carts');
        }
      });
  }

  calculateCartTotal(items: CartItem[]) {
    let total = 0;
    items.forEach((item) => {
      const priceNumber = parseFloat(item.price);
      total = total + (priceNumber * item.count);
    });
    return total;

  }
}
