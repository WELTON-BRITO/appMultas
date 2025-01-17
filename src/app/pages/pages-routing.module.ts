import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [   
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
      
   
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    /*{
      path: '**',
      component: null,
    },*/
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
