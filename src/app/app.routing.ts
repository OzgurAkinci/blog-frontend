import { Routes } from '@angular/router';
import {
  BaseComponent,
  DashboardComponent
} from './_pages/layouts';
import {BlankComponent} from './_pages/layouts/blank/blank.component';
import {AuthGuard} from './auth/auth.guard';
import {PublicBaseComponent, PublicDashboardComponent} from './_pages/public';
import {PostComponent} from './_pages/layouts/post/post.component';
import {PostEditComponent} from './_pages/layouts/post/edit/post-edit.component';
import {TagComponent} from './_pages/layouts/tag/tag.component';
import {TagEditComponent} from './_pages/layouts/tag/edit/tag-edit.component';
import {CategoryComponent} from './_pages/layouts/category/category.component';
import {CategoryEditComponent} from './_pages/layouts/category/edit/category-edit.component';

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
      },
      {
        path: 'post',
        component: PostComponent
      },
      {
        path: 'post/:id',
        component: PostEditComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'category/:id',
        component: CategoryEditComponent
      },
      {
        path: 'tag',
        component: TagComponent
      },
      {
        path: 'tag/:id',
        component: TagEditComponent
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
