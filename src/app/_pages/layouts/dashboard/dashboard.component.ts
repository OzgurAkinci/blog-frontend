import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  posts;
  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
  selected = [];
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.loadData();
  }

  onActivate(event) {}

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  loadData() {
    this.postService.getAll().subscribe(d => {
      this.posts = d;
    });
  }
}
