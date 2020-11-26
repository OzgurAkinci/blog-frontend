import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {PostService} from '../services/post.service';
import {TagService} from '../services/tag.service';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  totalPostCount = 0;
  totalCategoryCount = 0;
  totalTagCount = 0;
  constructor(private postService: PostService, private categoryService: CategoryService, private tagService: TagService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.postService.getTotalCount().subscribe(data => {
      this.totalPostCount = data;
    });
    this.categoryService.getTotalCount().subscribe(data => {
      this.totalCategoryCount = data;
    });
    this.tagService.getTotalCount().subscribe(data => {
      this.totalTagCount = data;
    });
  }


}
