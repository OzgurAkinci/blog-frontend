import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from '../../../model/user.model';
import {RootLayout} from '..';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BaseComponent extends RootLayout implements OnInit {
  user: User;
  menuLinks = [
    {
      label: 'Dashboard',
      details: '',
      routerLink: '/base/dashboard',
      iconType: 'pg',
      iconName: 'home'
    },
    {
      label: 'Post',
      details: '',
      routerLink: '/base/post',
      iconType: 'pg',
      iconName: 'brush'
    },
    {
      label: 'Category',
      details: '',
      routerLink: '/base/category',
      iconType: 'pg',
      iconName: 'brush'
    },
    {
      label: 'Tag',
      details: '',
      routerLink: '/base/tag',
      iconType: 'pg',
      iconName: 'brush'
    }
  ];
  ngOnInit() {
    this.authService.getCurrentUser()
        .subscribe((data: User) => {
          this.user = data;
        });
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']).then(_ => console.log('Logout'));
  }



}
