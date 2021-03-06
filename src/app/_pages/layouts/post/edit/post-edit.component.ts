import {AfterViewInit, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../../../model/post.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import {MessageService} from '../../../components/message/message.service';
import {Category} from '../../../../model/category.model';
import {CategoryService} from '../../services/category.service';
import {Tag} from '../../../../model/tag.model';
import {TagService} from '../../services/tag.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostEditComponent implements OnInit, AfterViewInit {
  post: Post = new Post();
  categories: Category[] = [];
  tags: Tag[] = [];
  scrollBarHorizontal = window.innerWidth < 960;
  columnModeSetting = window.innerWidth < 960 ? 'standard' : 'force';
  selectedCategory: any = [];
  selectedTag: any = [];

  sub: Subscription;
  quill: any;
  constructor(private postService: PostService, private categoryService: CategoryService, private tagService: TagService,
              private route: ActivatedRoute, private router: Router, private _notification: MessageService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        const id = params['id'];
        if (!isNaN(id)) {
          this.loadData(id);
        } else {
          this.post = new Post();
        }
      }
    });
  }

  loadExtraData() {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    });
    this.tagService.getAll().subscribe(data => {
      this.tags = data;
    });
  }

  ngAfterViewInit(): void {
    this.loadExtraData();
  }

  isSelectedCategory(row) {
    if (this.post.categories && row) {
      const isSelected_ = this.post.categories.findIndex(d => d.id === row.id);
      return isSelected_ !== -1;
    }
  }

  loadData(id: number) {
    this.postService.get(id).subscribe(data => {
      this.post = data;
    });
  }

  save() {
    this.post.categories = this.selectedCategory;
    this.postService.save(this.post).subscribe(data => {
      this.post = data;
      this._notification.create(
          'success',
          'Successfully Saved',
          {
            Position: 'top',
            Style: 'bar',
            Duration: 3000
          }
      );
    }, e => {
      this._notification.create(
          'danger',
          e.error.message,
          {
            Position: 'top',
            Style: 'bar',
            Duration: 3000
          }
      );
    });
  }

  delete(id: number) {
    this.postService.delete(id).subscribe(data => {
      this.router.navigate(['/base/post']);
    });
  }

  onActivateCategory(event) {

  }

  onSelectCategory({ selected }) {
    this.selectedCategory.splice(0, this.selectedCategory.length);
    this.selectedCategory.push(...selected);
  }

  onActivateTag(event) {}

  onSelectTag({ selected }) {
    this.selectedTag.splice(0, this.selectedTag.length);
    this.selectedTag.push(...selected);
  }


}
