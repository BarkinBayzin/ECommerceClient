import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  //Routing configuration for multiple layout management
  {
    path:"admin",component: LayoutComponent, children: [
      //Admin Home Page(Prefer like that not using module for not triggering lazy loading)
      { path: "", component: DashboardComponent }, 
      { 
        path: "customers", 
        loadChildren: () => import("./admin/components/customers/customers.module") //Lazy Loading
        .then(module => module.CustomersModule)
      }, //Modules knows the child routes
      { 
        path: "products", 
        loadChildren: () => import("./admin/components/products/products.module")
        .then(module => module.ProductsModule)
      },
      { 
        path: "orders", 
        loadChildren: () => import("./admin/components/orders/orders.module")
        .then(module => module.OrdersModule)
      } //Modules knows the child routes
  ]},
  { path:"",component:HomeComponent }, //UI Main Page
  { path:"basket", loadChildren:() => import("./ui/components/baskets/baskets.module").then(module => module.BasketsModule)},
  { path:"products", loadChildren:() => import("./ui/components/products/products.module").then(module => module.ProductsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
