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
