import {Currency} from "./currency";

export class Price {
  id: number;
  currency: Currency;
  amount: number;

  constructor(currency: Currency, amount: number) {
    this.currency = currency;
    this.amount = amount;
  }
}
