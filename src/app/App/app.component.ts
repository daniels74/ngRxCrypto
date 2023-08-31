import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { selectCrypto } from '../State/crypto.selectors';
import { CoinGeckoApiService } from '../Core/Services/coin-gecko-api.service';
import { coinGeckoApiActions } from '../State/Actions/cryptoList.actions';
import { nftCoinGeckoApiActions } from '../State/Actions/nftList.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store, private coinGeckoService: CoinGeckoApiService) { }

  title = 'reduxCrypto';

  // crypto$ = this.store.select(selectCrypto);

  ngOnInit() {
    this.coinGeckoService
      .getTrendingCrypto()
      .subscribe((cryptos) => {
        console.log("Top tredning", cryptos);
        this.store.dispatch(coinGeckoApiActions.retrieveCryptoList({ cryptos }))
      })

    this.coinGeckoService
      .getTrendingNFT()
      .subscribe((nfts) => {
        this.store.dispatch(nftCoinGeckoApiActions.retrieveNFTS({ nfts }))
      })
  }

}
