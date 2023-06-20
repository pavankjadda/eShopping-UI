import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import {AuthService} from '../../core/auth/auth.service';

@Component({
    selector: 'app-admin-home',
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.scss'],
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
})
export class AdminHomeComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    //if(this.authService.currentUserValue.token === '' || !this.authService.isValidSession())
    if (!this.authService.isUserLoggedIn()) {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
  }
}
