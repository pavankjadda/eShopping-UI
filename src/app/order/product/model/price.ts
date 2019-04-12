export class Price
{
  id: number;
  currency: string;
  amount: number;

  constructor( currency: string , amount: number)
  {
    this.currency=currency;
    this.amount=amount;
  }
}
