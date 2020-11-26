import {AfterViewInit, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import {MessageService} from '../../../components/message/message.service';
import {CategoryService} from '../../services/category.service';
import {Category} from '../../../../model/category.model';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryEditComponent implements OnInit, AfterViewInit {
  category: Category = new Category();
  sub: Subscription;
  public customOption: any = {};

  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private router: Router,
              private _notification: MessageService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        const id = params['id'];
        if (!isNaN(id)) {
          this.loadData(id);
        } else {
          this.category = new Category();
        }
      }
    });
  }

  ngAfterViewInit(): void {

  }

  loadData(id: number) {
    this.categoryService.get(id).subscribe(data => {
      this.category = data;
    });
  }

  save() {
    this.categoryService.save(this.category).subscribe(data => {
      this.category = data;
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
    this.categoryService.delete(id).subscribe(data => {
      this.router.navigate(['/base/category']);
    });
  }


}
