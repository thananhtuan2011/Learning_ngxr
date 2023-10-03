import { Blockchain } from "../blockchain/blockchain.model";

export const ADD_COIN = 'ADD_COIN';

export function addCoin(state: Blockchain[] = [], action) {
  console.log("action", action)
  switch (action.type) {
    case ADD_COIN:
      return [...state, action.payload];
    default:
      return state;
  }
}
