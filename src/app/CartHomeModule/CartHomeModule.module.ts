import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartHomeModuleComponent } from './CartHomeModule.component';
import { CartViewComponent } from './CartView/CartView.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    CartHomeModuleComponent,
    CartViewComponent
  ]
})
export class CartHomeModule { }
