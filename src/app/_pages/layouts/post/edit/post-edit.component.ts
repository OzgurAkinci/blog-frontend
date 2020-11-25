import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../../../model/post.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import {MessageService} from '../../../components/message/message.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostEditComponent implements OnInit {
  post: Post = new Post();
  sub: Subscription;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router,
              private _notification: MessageService) {}

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

  loadData(id: number) {
    this.postService.get(id).subscribe(data => {
      this.post = data;
    });
  }

  save() {
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


}
