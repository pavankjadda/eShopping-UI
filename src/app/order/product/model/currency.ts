export class Currency
{
  id: number;
  name: string;
  symbol: string;
  isoCode: string;

  constructor(name: string, symbol: string)
  {
    this.name=name;
    this.symbol=symbol;
  }
}
