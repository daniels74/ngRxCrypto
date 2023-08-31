import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendingcryptocurrencyRoutingModule } from './trendingcryptocurrency-routing.module';
import { TrendingcryptocurrencyComponent } from './trendingcryptocurrency.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './Components/card/card.component';
import { BorderglowModule } from '../../../app/Shared/borderglow/borderglow.module';
import { CardComponentModule } from './Components/card/card.module';


@NgModule({
  declarations: [
    TrendingcryptocurrencyComponent
  ],
  imports: [
    BorderglowModule,
    CardComponentModule,
    CommonModule,
    TrendingcryptocurrencyRoutingModule
  ],
  exports: [RouterModule]
})
export class TrendingcryptocurrencyModule { }
