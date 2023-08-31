import { createActionGroup, props } from '@ngrx/store';
import { CoinsEntity, TopTrending } from 'src/app/Core/top-trending';

export const coinGeckoApiActions = createActionGroup({
    source: 'Coin Gecko Api',
    events: {
        'Retrieve Crypto List': props<{ cryptos: Array<CoinsEntity>}>(),
    }
});