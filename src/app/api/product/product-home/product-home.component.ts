import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import {AuthService} from '../../../core/auth/auth.service';

@Component({
    selector: 'app-product-home',
    templateUrl: './product-home.component.html',
    styleUrls: ['./product-home.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
})
export class ProductHomeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    if (!this.authService.isUserLoggedIn()) {
    }
  }
}
