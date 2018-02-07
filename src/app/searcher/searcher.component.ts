import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'ml-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit, OnDestroy {

  queryControl = new FormControl();
  subscription: Subscription;

  @Output() query: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    this.subscription = this.queryControl.valueChanges
      .debounceTime(300) // wait 300ms after the last event before emitting last event
      .distinctUntilChanged() // only emit if value is different from previous value
      .subscribe(query => this.query.emit(query));
  }

  /**
   * Search the same value that already exist in the input
   */
  onSearchButton(): void {
    this.queryControl.setValue(this.queryControl.value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
