import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrendingcryptoComponent } from './trendingcrypto.component';


const routes: Routes = [
  {
    path: '',
    component: TrendingcryptoComponent
  }
]

@NgModule({
  declarations: [TrendingcryptoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TrendingcryptoModule { }
