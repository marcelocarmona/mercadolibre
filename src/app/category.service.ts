import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CategoryService {

  private categories$ = new Subject<string[]>();

  getData() {
      return this.categories$;
  }

  updateData(categories: string[]) {
      this.categories$.next(categories);
  }

}
