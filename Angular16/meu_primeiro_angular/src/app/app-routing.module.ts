import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "inicio", component: HomeComponent},
  {path: "produtos", component: ProductComponent},
  {path: "contato", component: ContactComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
