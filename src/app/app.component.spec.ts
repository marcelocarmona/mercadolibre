import { TestBed, async } from '@angular/core/testing';
import { Declarations, Imports } from './app.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { CategoryService } from './category.service';
import { RouterTestingModule } from '@angular/router/testing';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...Imports, RouterTestingModule],
      declarations: Declarations,
      providers: [ApiService, CategoryService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as categories$`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.categories$).toBeDefined();
  }));
  it('should render a router-outlet tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeDefined();
  }));
});
