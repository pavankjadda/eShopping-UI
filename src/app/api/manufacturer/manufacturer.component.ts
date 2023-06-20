import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-manufacturer',
    templateUrl: './manufacturer.component.html',
    styleUrls: ['./manufacturer.component.scss'],
    standalone: true,
    imports: [RouterOutlet],
})
export class ManufacturerComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
