import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {Code404Component} from './code404/code404.component';
import {ProductDescComponent} from './product-desc/product-desc.component';
import {SellerComponent} from './seller/seller.component';
import {ChatComponent} from './chat/chat.component';

const routes: Routes = [
  // {path: '',  redirectTo: 'home', pathMatch: 'full'},
  {path: 'chat', component: ChatComponent , outlet: 'aux'},
  {path: 'home', component : HomeComponent},
  {path: 'product/:id', component: ProductComponent, children: [
    {path: '', component : ProductDescComponent},
    {path: 'seller/:id', component : SellerComponent}
  ]},
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
