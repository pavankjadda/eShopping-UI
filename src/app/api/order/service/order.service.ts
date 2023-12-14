import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../model/order';

@Injectable({
	providedIn: 'root',
})
export class OrderService {
	httpClient = inject(HttpClient);

	getOrders(url: string) {
		return this.httpClient.get<Order[]>(url);
	}
}
