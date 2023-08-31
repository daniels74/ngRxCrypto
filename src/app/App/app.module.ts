import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store'; // // REDUX Import store
import { cryptoReducer } from '../State/Reducers/cryptoList.reducer'; // // REDUX
import { nftReducer } from '../State/Reducers/nftList.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot({ cryptos: cryptoReducer, nfts: nftReducer}),  // // REDUX 
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
