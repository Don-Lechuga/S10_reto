import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    IndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    IndexComponent
  ]
})
export class ComponentsModule { }
