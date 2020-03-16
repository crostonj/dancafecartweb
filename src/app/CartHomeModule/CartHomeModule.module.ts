import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartHomeModuleComponent } from './CartHomeModule.component';
import { CartViewComponent } from './CartView/CartView.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CartHomeModuleComponent,
    CartViewComponent
  ]
})
export class CartHomeModule { }
