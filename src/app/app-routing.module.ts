import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartHomeModuleComponent } from './CartHomeModule/CartHomeModule.component';
import { CartViewComponent } from './CartHomeModule/CartView/CartView.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartLinkComponent } from './CartLink/CartLink.component';


const appRoutes: Routes = [
  {
    path: 'View',
    component: CartViewComponent
  },
  {
    path: 'Link',
    component: CartLinkComponent
    // loadChildren: () => import('./CartHomeModule/CartHomeModule.module').then(m => m.CartHomeModule)
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
  imports: [ RouterModule.forRoot(
    appRoutes,
    {
      enableTracing: false, // <-- debugging purposes only
      //preloadingStrategy: SelectivePreloadingStrategyService,
    }
  )],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
