import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CoinsEntity, NftsEntity } from '../Core/top-trending';

export const selectCrypto = createFeatureSelector<Array<CoinsEntity>>('cryptos')

export const selectNfts = createFeatureSelector<Array<NftsEntity>>('nfts')