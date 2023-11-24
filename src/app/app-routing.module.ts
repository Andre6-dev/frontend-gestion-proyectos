import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { PruebaComponent } from "./prueba/prueba.component";

const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,
    children: [
      {path: '', component: PruebaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
