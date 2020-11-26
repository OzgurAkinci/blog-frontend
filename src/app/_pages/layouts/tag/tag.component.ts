import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TagService} from '../services/tag.service';

@Component({
  selector: 'app-post',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TagComponent implements OnInit {
  tags;
  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
  selected = [];
  constructor(private tagService: TagService) {}

  ngOnInit() {
    this.loadData();
  }

  onActivate(event) {}

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  loadData() {
    this.tagService.getAll().subscribe(d => {
      this.tags = d;
    });
  }
}
