import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindByPinModule } from './find-by-pin.module';
import { FindByPinComponent } from './find-by-pin.component';


const routes: Routes = [
  {
    path: '',
    component: FindByPinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindByPinRoutingModule { }
