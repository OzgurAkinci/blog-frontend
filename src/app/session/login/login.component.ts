import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
import {MessageService} from '../../_pages/components/message/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Sample Varriables
  loginForm: any;
  userName;
  password;
  constructor(private authService: AuthService, private router: Router, private _notification: MessageService) {}

  ngOnInit() {

  }

  onFormSubmit(): void {
    this.loginForm = {
      /*username: this.userName,
      password: this.password*/
      username: 'superuser',
      password: 'superpassword'
    };
    this.authService.login(this.loginForm)
        .subscribe(() => {
          this.router.navigate(['/']).then(_ => console.log('You are secure now!'));
        }, (err: any) => {
          console.log(err);
          this._notification.create(
              'danger',
              err,
              {
                Position: 'top',
                Style: 'bar',
                Duration: 3000
              }
          );
        });
  }
}
