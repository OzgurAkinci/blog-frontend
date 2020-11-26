import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {
  categories;
  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
  selected = [];
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.loadData();
  }

  onActivate(event) {}

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  loadData() {
    this.categoryService.getAll().subscribe(d => {
      this.categories = d;
    });
  }
}
