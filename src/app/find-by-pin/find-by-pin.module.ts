import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindByPinRoutingModule } from './find-by-pin-routing.module';
import { FindByPinComponent } from './find-by-pin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FindByPinComponent],
  imports: [
    CommonModule,
    FindByPinRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [FindByPinComponent]
})
export class FindByPinModule { }