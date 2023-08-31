import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoinsEntity, NftsEntity } from 'src/app/Core/top-trending';
import { selectCrypto, selectNfts } from 'src/app/State/crypto.selectors';

@Component({
  selector: 'app-trendingcryptocurrency',
  templateUrl: './trendingcryptocurrency.component.html',
  styleUrls: ['./trendingcryptocurrency.component.scss']
})
export class TrendingcryptocurrencyComponent{

  constructor(private store: Store) {}

  crypto$ : Observable<Array<CoinsEntity>> = this.store.select(selectCrypto);

  nfts$ : Observable<Array<NftsEntity>> = this.store.select(selectNfts);
}
