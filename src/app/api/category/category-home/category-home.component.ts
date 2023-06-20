import {Component, OnInit} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-category-home',
    templateUrl: './category-home.component.html',
    styleUrls: ['./category-home.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
})
export class CategoryHomeComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
