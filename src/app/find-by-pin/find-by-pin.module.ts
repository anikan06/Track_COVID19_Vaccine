import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindByPinRoutingModule } from './find-by-pin-routing.module';
import { FindByPinComponent } from './find-by-pin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FindByPinSearchedDataComponent } from './find-by-pin-searched-data/find-by-pin-searched-data.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [FindByPinComponent, FindByPinSearchedDataComponent],
  imports: [
    CommonModule,
    FindByPinRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  bootstrap: [FindByPinComponent],
  exports: [FindByPinSearchedDataComponent]
})
export class FindByPinModule { }
