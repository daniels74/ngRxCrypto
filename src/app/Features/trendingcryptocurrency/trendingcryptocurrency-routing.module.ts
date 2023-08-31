import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingcryptocurrencyComponent } from './trendingcryptocurrency.component';

const routes: Routes = [{ path: '', component: TrendingcryptocurrencyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendingcryptocurrencyRoutingModule { }
