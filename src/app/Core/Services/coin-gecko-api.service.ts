import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoinsEntity, NftsEntity, TopTrending } from '../top-trending';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinGeckoApiService {

  constructor(private http: HttpClient) { }

  getTrendingCrypto(): Observable<Array<CoinsEntity>> {
    return this.http
      .get<{ coins: CoinsEntity[] }>('https://api.coingecko.com/api/v3/search/trending')
      .pipe(map((cry) => cry.coins || []));
  }

  getTrendingNFT() : Observable<Array<NftsEntity>> {
    return this.http
    .get<{nfts: NftsEntity[]}>('https://api.coingecko.com/api/v3/search/trending')
    .pipe(map((nft) => nft.nfts || []))
  }

}
