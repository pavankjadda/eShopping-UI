import {Component, OnInit} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-order-home',
    templateUrl: './order-home.component.html',
    styleUrls: ['./order-home.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
})
export class OrderHomeComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
