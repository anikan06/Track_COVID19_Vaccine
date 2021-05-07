import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'landingPage',
    pathMatch: 'full'
  },
  {
    path: 'landingPage',
    component: LandingPageComponent,
  },
  {
    path: 'find-by-pin',
    loadChildren: 'src/app/find-by-pin/find-by-pin.module#FindByPinModule'
  },
  {
    path: 'find-by-district',
    loadChildren: 'src/app/find-by-district/find-by-district.module#FindByDistrictModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
