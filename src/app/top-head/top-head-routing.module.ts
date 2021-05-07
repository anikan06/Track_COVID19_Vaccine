import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponentComponent } from './nav-component/nav-component.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'h',
    pathMatch: 'full'
  },
  {
    path: '',
    component: NavComponentComponent,
    children: [
      {
        path: 'h',
        loadChildren: 'src/app/landing-page/landing-page.module#LandingPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopHeadRoutingModule { }
