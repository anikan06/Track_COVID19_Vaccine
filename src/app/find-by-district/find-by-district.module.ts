import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindByDistrictRoutingModule } from './find-by-district-routing.module';
import { FindByDistrictSearchedDataComponent } from './find-by-district-searched-data/find-by-district-searched-data.component';
import { FindByPinModule } from '../find-by-pin/find-by-pin.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [FindByDistrictSearchedDataComponent],
  imports: [
    CommonModule,
    FindByDistrictRoutingModule,
    FindByPinModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class FindByDistrictModule { }
