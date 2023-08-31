import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingcryptocurrencyComponent } from './trendingcryptocurrency.component';

describe('TrendingcryptocurrencyComponent', () => {
  let component: TrendingcryptocurrencyComponent;
  let fixture: ComponentFixture<TrendingcryptocurrencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingcryptocurrencyComponent]
    });
    fixture = TestBed.createComponent(TrendingcryptocurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
