import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListComponent } from './items-list.component';
import { ApiService } from '../api.service';
import { CategoryService } from '../category.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Imports, Declarations } from '../app.module';
import { Observable } from 'rxjs/Observable';
import { QueryItems } from '../../server/routes/api';

class MockApiService {
  public queryItems(id: string): Observable<QueryItems> {
    const queryItems: QueryItems = {
      items: [
        {
          id: 'MLA692828367',
          title: 'Notebook Lenovo  I7 V310  I7 15.6  Dvd Hdmi Fscomputer Envio',
          price: {
            amount: 14789,
            currency: 'ARS',
            decimals: 0
          },
          picture: 'http://mla-s2-p.mlstatic.com/989590-MLA25742769795_072017-I.jpg',
          condition: 'new',
          freeShipping: true
        },
        {
          id: 'MLA644289531',
          title: 'Proyector Benq Ms630st Svga Tirocorto 3200 Lms 3d Fscomputer',
          price: {
            amount: 16299,
            currency: 'ARS',
            decimals: 0
          },
          picture: 'http://mla-s2-p.mlstatic.com/867115-MLA25188866507_112016-I.jpg',
          condition: 'new',
          freeShipping: true
        },
        {
          id: 'MLA632640544',
          title: 'Mi Computer V3 - Commodore 64 Sinclair Spectrum Ant Attack',
          price: {
            amount: 450,
            currency: 'ARS',
            decimals: 0
          },
          picture: 'http://mla-s1-p.mlstatic.com/158405-MLA25019847570_082016-I.jpg',
          condition: 'used',
          freeShipping: false
        },
        {
          id: 'MLA649344651',
          title: 'Combo Cartuchos Hp 122 Neg+color Original American Computers',
          price: {
            amount: 592.9,
            currency: 'ARS',
            decimals: 89
          },
          picture: 'http://mla-s2-p.mlstatic.com/817141-MLA25826302307_072017-I.jpg',
          condition: 'new',
          freeShipping: false
        }
      ],
      categories: []
    };
    return Observable.of(queryItems);
  }
}

describe('ItemsListComponent', () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...Imports, RouterTestingModule],
      declarations: Declarations,
      providers: [{provide: ApiService, useValue: new MockApiService()}, CategoryService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
