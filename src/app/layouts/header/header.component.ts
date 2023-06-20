import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [
        RouterLink,
        NgIf,
        MatButtonModule,
        MatMenuModule,
        MatIconModule,
    ],
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  logout() {
    this.router.navigate(['/logout']);
  }
}
