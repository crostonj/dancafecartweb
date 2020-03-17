import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartLinkComponent } from './CartLink/CartLink.component';
import { RouterModule } from '@angular/router';
import { CartHomeModule } from './CartHomeModule/CartHomeModule.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
   declarations: [
      AppComponent,
      CartLinkComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule,
      CartHomeModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
