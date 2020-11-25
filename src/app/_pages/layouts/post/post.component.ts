import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
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
