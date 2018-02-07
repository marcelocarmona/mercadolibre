import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs/Subscription';
import { ItemDetail } from '../../server/routes/api';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ml-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  itemDetail: ItemDetail;
  isLoading = true;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit() {
    this.subscription = this.route.paramMap
                                  .switchMap((params: ParamMap) => {
                                    this.isLoading = true;
                                    return this.apiService.getItem(params.get('id'));
                                  })
                                  .subscribe(itemDetail => {
                                    this.itemDetail = itemDetail;
                                    this.isLoading = false;
                                  });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
