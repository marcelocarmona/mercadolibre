import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Item, QueryItems } from '../../server/routes/api';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { CategoryService } from '../category.service';

@Component({
  selector: 'ml-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit, OnDestroy {

  queryItems: QueryItems;
  isLoading = true;
  subscription: Subscription;

  private firstSearch = false;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private categoryService: CategoryService) {}

  ngOnInit() {
    this.subscription = this.route.queryParamMap.switchMap(params => {
      this.isLoading = true;
      return this.apiService.queryItems(params.get('q'));
    })
    .subscribe(items => {
      this.queryItems = items;
      this.isLoading = false;
      this.categoryService.updateData(items.categories);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
