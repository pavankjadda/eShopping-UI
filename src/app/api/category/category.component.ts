import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth/auth.service';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss'],
    standalone: true,
    imports: [RouterOutlet],
})
export class CategoryComponent implements OnInit {
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    if (!this.authService.isUserLoggedIn()) {
    }
  }
}
