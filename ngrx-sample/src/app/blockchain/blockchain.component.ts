import { Component } from '@angular/core';
import { AppState } from './../app.state';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Blockchain } from './blockchain.model';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent {

  myForm: FormGroup;

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) {
    this.createForm();
   }

   createForm() {
     this.myForm = this.formBuilder.group({
       name: ['', Validators.required],
       price: ['', Validators.required]
     });
   }

   addCoin(name, price) {
      this.store.dispatch({
        type: 'ADD_COIN',
        payload: <Blockchain> {
          name: name,
          price: price
        }
      });

      this.myForm.reset();
   }
}
