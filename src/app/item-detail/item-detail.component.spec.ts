import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailComponent } from './item-detail.component';
import { ApiService } from '../api.service';
import { CategoryService } from '../category.service';
import { Imports, Declarations } from '../app.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ItemDetail } from '../../server/routes/api';
import 'rxjs/add/observable/of';

describe('ItemDetailComponent', () => {
  let component: ItemDetailComponent;
  let fixture: ComponentFixture<ItemDetailComponent>;

  class MockApiService {
    public getItem(id: string): Observable<ItemDetail> {
      const anItem: ItemDetail = {
        item: {
          id: 'MLA705554543',
          title: 'Fiat Uno Con Equipo Gnc,precio Total $45999',
          price: {
            amount: 45999,
            currency: 'ARS',
            decimals: 0
          },
          picture: 'https://mla-s2-p.mlstatic.com/763976-MLA26758785919_022018-O.jpg',
          condition: 'used',
          freeShipping: false,
          soldQuantity: 0,
          description: 'fiat sarasa'
        }
      };
      return Observable.of(anItem);
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...Imports, RouterTestingModule],
      declarations: Declarations,
      providers: [{provide: ApiService, useValue: new MockApiService()}, CategoryService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
