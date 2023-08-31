import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingcryptoComponent } from './trendingcrypto.component';

describe('TrendingcryptoComponent', () => {
  let component: TrendingcryptoComponent;
  let fixture: ComponentFixture<TrendingcryptoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingcryptoComponent]
    });
    fixture = TestBed.createComponent(TrendingcryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
