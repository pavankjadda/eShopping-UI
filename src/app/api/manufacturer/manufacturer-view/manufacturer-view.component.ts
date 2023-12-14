import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../../../../environments/environment';
import { MANUFACTURER_API_URL } from '../../../app.constants';
import { Manufacturer } from '../model/manufacturer';
import { ManufacturerService } from '../service/manufacturer.service';
import { NgIf } from '@angular/common';

@Component({
	selector: 'app-manufacturer-view',
	templateUrl: './manufacturer-view.component.html',
	standalone: true,
	imports: [NgIf, FormsModule, ReactiveFormsModule, RouterLink],
})
export class ManufacturerViewComponent implements OnInit {
	manufacturer: Manufacturer;

	manufacturerForm = new UntypedFormGroup({
		id: new UntypedFormControl({ value: '', disabled: true }),
		name: new UntypedFormControl(''),
		displayName: new UntypedFormControl(''),
		description: new UntypedFormControl(''),
		manufacturerAddress: new UntypedFormControl(''),
		contactEmail: new UntypedFormControl(''),
		phone: new UntypedFormControl(''),
		fax: new UntypedFormControl(''),
		products: new UntypedFormControl(''),
	});

	constructor(
		private manufacturerService: ManufacturerService,
		private spinner: NgxSpinnerService,
		private route: ActivatedRoute,
		private router: Router,
	) {}

	ngOnInit() {
		this.getManufacturer();
	}

	manufacturerDataAvailable(): boolean {
		return this.manufacturer !== undefined;
	}

	deleteManufacturer() {
		if (confirm('Are you sure you wanna delete Manufacturer?')) {
			const id = this.route.snapshot.paramMap.get('id');
			const url = environment.BASE_URL + MANUFACTURER_API_URL + '/delete/' + id;

			this.manufacturerService.deleteManufacturer(url).subscribe(
				(data) => {
					console.log('Manufacturer with id: ' + id + ' deleted');
					this.router.navigate(['manufacturer/list']);
				},
				(error1) => {
					console.log('Failed to delete Manufacturer with id: ' + id);
				},
			);
		}
	}

	private getManufacturer() {
		const id = this.route.snapshot.paramMap.get('id');
		const url = environment.BASE_URL + MANUFACTURER_API_URL + '/find/' + id;

		this.spinner.show();
		this.manufacturerService
			.getManufacturer(url)
			.pipe()
			.subscribe(
				(data) => {
					this.manufacturer = data;
					this.manufacturerForm.patchValue({
						id: data.id,
						name: data.name,
						displayName: data.displayName,
						description: data.description,
						manufacturerAddress:
							data.manufacturerAddress.streetName +
							' ' +
							data.manufacturerAddress.apartment +
							', ' +
							data.manufacturerAddress.city.name +
							', ' +
							data.manufacturerAddress.state.name +
							', ' +
							data.manufacturerAddress.country.name +
							', ' +
							data.manufacturerAddress.zipCode,
						contactEmail: data.contactEmail,
						fax: data.fax,
						phone: data.phone,
						products: data.products,
					});
					this.spinner.hide();
				},
				(error) => {
					console.log(error);
					this.spinner.hide();
				},
			);
	}
}
