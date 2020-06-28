import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../core/auth/auth.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    if (!this.authService.isUserLoggedIn()) {
    }
  }
}
