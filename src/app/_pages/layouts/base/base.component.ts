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
      details: '12 New Updates',
      routerLink: '/base/dashboard',
      iconType: 'fi',
      iconName: 'shield'
    },
    {
      label: 'Extra',
      iconType: 'fi',
      iconName: 'box',
      toggle: 'close',
      submenu: [
        {
          label: '404 Page',
          routerLink: '/auth/error/404',
          iconType: 'letter',
          iconName: 'pg'
        },
        {
          label: '500 Page',
          routerLink: '/auth/error/500',
          iconType: 'letter',
          iconName: 'pg'
        },
        {
          label: 'Login',
          routerLink: '/auth/login',
          iconType: 'letter',
          iconName: 'l'
        },
        {
          label: 'Register',
          routerLink: '/auth/register',
          iconType: 'letter',
          iconName: 're'
        }
      ]
    }
  ];
  ngOnInit() {
    this.authService.getCurrentUser()
        .subscribe((data: User) => {
          this.user = data;
          console.log(data);
        });
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']).then(_ => console.log('Logout'));
  }



}
