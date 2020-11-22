import { Routes } from '@angular/router';
import {
  BaseComponent,
  DashboardComponent
} from './_pages/layouts';
import {BlankComponent} from './_pages/layouts/blank/blank.component';
import {AuthGuard} from './auth/auth.guard';
import {PublicBaseComponent, PublicDashboardComponent} from './_pages/public';

export const AppRoutes: Routes = [
  { path: '',   redirectTo: '/public/dashboard', pathMatch: 'full' },
  {
    path: 'public',
    component: PublicBaseComponent,
    children: [
      {
        path: 'dashboard',
        component: PublicDashboardComponent
      }
    ]
  },
  { path: 'system',   redirectTo: '/base/dashboard', pathMatch: 'full' },
  {
    path: 'base',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'auth',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren: './session/session.module#SessionModule'
      }
    ]
  }
];
