import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from '../model/address';

@Injectable({
	providedIn: 'root',
})
export class AddressService {
	httpClient = inject(HttpClient);

	updateAddress(url: string, address: Address) {
		return this.httpClient.post<Address>(url, address);
	}

	deleteAddress(url: string) {
		return this.httpClient.delete(url);
	}
}
