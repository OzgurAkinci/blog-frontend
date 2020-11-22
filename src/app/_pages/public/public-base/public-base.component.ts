import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {PublicRootLayout} from '../public-root/public-root.component';

@Component({
  selector: 'app-public-base',
  templateUrl: './public-base.component.html',
  styleUrls: ['./public-base.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PublicBaseComponent extends PublicRootLayout implements OnInit {

  ngOnInit() {

  }



}
