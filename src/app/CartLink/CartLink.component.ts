import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/Services/cart-service.service';
import { CartItem } from 'src/Models/cartItem';

@Component({
  selector: 'app-cartlink',
  templateUrl: './CartLink.component.html',
  styleUrls: ['./CartLink.component.css']
})
export class CartLinkComponent implements OnInit {

  cartItems: CartItem[];
  cartCount: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe({
      next: (items: CartItem[]) => {
        this.cartItems = items;
        this.cartCount = items.length;
      },
      error: () => {
        console.log('Error my getting carts');
      }
    });
  }

}
