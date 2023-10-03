import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { Blockchain } from '../blockchain/blockchain.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {

  coins: Observable<Blockchain[]>;

  constructor(private store: Store<AppState>) {
    this.coins = this.store.select(state => state.blockchain);
    this.coins.subscribe(res => {
      console.log("rể", res)
    })
  }
}
