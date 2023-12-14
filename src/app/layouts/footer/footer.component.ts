import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
  standalone: true,
})
export class FooterComponent implements OnInit {
  appVersion: any;

  constructor() {}

  ngOnInit() {
    this.appVersion = environment.VERSION;
  }
}
