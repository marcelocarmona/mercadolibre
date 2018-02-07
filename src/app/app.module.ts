import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ApiService } from './api.service';
import { SearcherComponent } from './searcher/searcher.component';
import { CategoryService } from './category.service';

export const Declarations = [
  AppComponent,
  ItemDetailComponent,
  PageNotFoundComponent,
  ItemsListComponent,
  SearcherComponent
];

export const Imports = [
  BrowserModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: Declarations,
  imports: [...Imports, RouterModule.forRoot(appRoutes)],
  providers: [ApiService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
