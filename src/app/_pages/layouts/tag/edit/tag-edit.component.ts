import {AfterViewInit, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import {MessageService} from '../../../components/message/message.service';
import {Tag} from '../../../../model/tag.model';
import {TagService} from '../../services/tag.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './tag-edit.component.html',
  styleUrls: ['./tag-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TagEditComponent implements OnInit, AfterViewInit {
  tag: Tag = new Tag();
  sub: Subscription;

  public customOption: any = {};

  constructor(private tagService: TagService, private route: ActivatedRoute, private router: Router,
              private _notification: MessageService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        const id = params['id'];
        if (!isNaN(id)) {
          this.loadData(id);
        } else {
          this.tag = new Tag();
        }
      }
    });
  }

  ngAfterViewInit(): void {

  }

  loadData(id: number) {
    this.tagService.get(id).subscribe(data => {
      this.tag = data;
    });
  }

  save() {
    this.tagService.save(this.tag).subscribe(data => {
      this.tag = data;
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
    this.tagService.delete(id).subscribe(data => {
      this.router.navigate(['/base/tag']);
    });
  }


}
