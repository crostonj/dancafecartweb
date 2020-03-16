import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartHomeModuleComponent } from './CartHomeModule/CartHomeModule.component';
import { CartViewComponent } from './CartHomeModule/CartView/CartView.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  {
    path: 'View',
    component: CartViewComponent
  },
  { path: '',
    component: CartHomeModuleComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
