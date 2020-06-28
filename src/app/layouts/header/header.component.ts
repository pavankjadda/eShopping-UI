import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../core/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {}

  isLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  logout() {
    this.router.navigate(["/logout"]);
  }
}
