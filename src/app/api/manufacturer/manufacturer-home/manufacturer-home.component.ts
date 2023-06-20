import {Component, OnInit} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-manufacturer-home',
    templateUrl: './manufacturer-home.component.html',
    styleUrls: ['./manufacturer-home.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
})
export class ManufacturerHomeComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
