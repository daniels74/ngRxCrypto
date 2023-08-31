import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingcryptocurrencyRoutingModule } from './trendingcryptocurrency-routing.module';
import { TrendingcryptocurrencyComponent } from './trendingcryptocurrency.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TrendingcryptocurrencyComponent
  ],
  imports: [
    CommonModule,
    TrendingcryptocurrencyRoutingModule
  ],
  exports: [RouterModule]
})
export class TrendingcryptocurrencyModule { }
