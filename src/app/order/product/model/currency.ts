export class Currency
{
  id: number;
  name: string;
  symbol: string;
  isoCode: string;

  constructor(id: number, name: string, symbol: string)
  {
    this.name=name;
    this.symbol=symbol;
    this.id=id;
  }
}
