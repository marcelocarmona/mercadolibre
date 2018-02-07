import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcherComponent } from './searcher.component';
import { ApiService } from '../api.service';
import { CategoryService } from '../category.service';
import { Declarations, Imports } from '../app.module';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearcherComponent', () => {
  let component: SearcherComponent;
  let fixture: ComponentFixture<SearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ...Imports],
      declarations: Declarations,
      providers: [ApiService, CategoryService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
