import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { StoreModule } from '@ngrx/store';
import { addCoin } from './reducers/blockchain.reducer';
import { DisplayComponent } from './display/display.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ blockchain: addCoin }),
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
