import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CategoryService } from './category.service';

@Component({
  selector: 'ml-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  categories$: Observable<string[]> = this.categoryService.getData().asObservable();

  constructor(private router: Router, private categoryService: CategoryService) {
  }

  onSearch(query: string) {
    this.router.navigate(['/items'], {queryParams: { q: query }});
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
