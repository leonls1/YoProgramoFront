import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductNewComponent } from './components/product-new/product-new.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'new', component: ProductNewComponent},
  {path: 'edit/:id', component: ProductEditComponent},
  {path: 'detail/:id', component: ProductDetailComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'} //siempre va al al ultimo esta ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
