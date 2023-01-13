import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { C1Component } from './components/c1/c1.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {path: "", component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
