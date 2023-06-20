import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss'],
    standalone: true,
    imports: [RouterOutlet],
})
export class OrderComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
