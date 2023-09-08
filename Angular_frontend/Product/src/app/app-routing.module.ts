import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductSaveComponent } from './product-save/product-save.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

const routes: Routes = [
  {path:'getAll',component:ProductGetComponent},
  {path:'remove/:id',component:ProductGetComponent},
  {path:'save',component:ProductSaveComponent},
  {path:'update/:id',component:ProductUpdateComponent},
  {path:'',redirectTo:'getAll',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
