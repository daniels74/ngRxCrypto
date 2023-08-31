import { NgModule, OnInit } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TrendingcryptoModule } from '../Features/trendingcrypto/trendingcrypto.module';

const routes: Routes = [
  {path: '',
  loadChildren: () => 
  import('../Features/home/home.module').then((m) => m.HomeModule)
  },
  {path: 'trending',
  loadChildren: () => 
  import('../Features/trendingcrypto/trendingcrypto.module').then((m) => m.TrendingcryptoModule)
  },
  { path: 'trendingcrypto', loadChildren: () => import('../Features/trendingcryptocurrency/trendingcryptocurrency.module').then(m => m.TrendingcryptocurrencyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule implements OnInit {
  ngOnInit() {}
}
