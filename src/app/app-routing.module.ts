import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { AboutComponent } from "./about/about.component";
import { ProductInfoComponent } from "./product-info/product-info.component";

const routes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "contacts", component: ContactFormComponent },
  { path: "about", component: AboutComponent },
  { path: "products/:id", component: ProductInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
