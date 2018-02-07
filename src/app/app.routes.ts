import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ItemsListComponent } from './items-list/items-list.component';

export const appRoutes: Routes = [
  { path: 'items', component: ItemsListComponent, },
  { path: 'items/:id', component: ItemDetailComponent },
  { path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
