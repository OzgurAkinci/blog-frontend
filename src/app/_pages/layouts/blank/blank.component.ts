import { Component, OnInit, OnDestroy, ViewChild, HostListener, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-blank-layouts',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlankComponent implements OnInit {
  @ViewChild('root', { static: false }) root;
  constructor() {}

  ngOnInit() {}
}
