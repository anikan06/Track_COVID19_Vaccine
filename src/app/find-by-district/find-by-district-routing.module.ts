import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindByDistrictModule } from './find-by-district.module';
import { FindByDistrictSearchedDataComponent } from './find-by-district-searched-data/find-by-district-searched-data.component';


const routes: Routes = [
  {
    path: '',
    component: FindByDistrictSearchedDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindByDistrictRoutingModule { }
