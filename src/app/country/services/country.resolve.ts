import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CountryService} from './country.service';
import {Country} from '../model/country';

@Injectable()
export class CountryResolve implements Resolve<any>
{
  constructor(private  countryService: CountryService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,): any
  {
    return this.countryService.getCountries();
  }
}
