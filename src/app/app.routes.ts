import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReceptionComponent } from './reception-module/reception-component/reception.component';

const APP_ROUTES: Routes = [
  { path: 'ingresar', component: LoginComponent },
  { path: 'recepcion', component: ReceptionComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'ingresar' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);