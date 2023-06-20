import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";
import { STATE_API_URL } from "../../app.constants";
import { State } from "./model/state";
import { StateService } from "./services/state.service";
import { RouterLink, Routes } from "@angular/router";
import { NgFor, NgIf } from "@angular/common";
import { UserAuthGuard } from "../../guards/user-auth.guard";

@Component({
  selector: "app-state",
  templateUrl: "./state.component.html",
  styleUrls: ["./state.component.scss"],
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
})
export class StateComponent implements OnInit {
  states: Array<State>;

  constructor(private stateService: StateService) {}

  ngOnInit() {
    this.getStates();
  }

  getStates() {
    const url = environment.BASE_URL + STATE_API_URL + "/list";
    this.stateService.getStates(url).subscribe(
      (data) => {
        this.states = data;
      },
      (err) => console.error(err),
      () => console.log("States retrieved from backend")
    );
    return this.states;
  }

  statesDataAvailable(): boolean {
    return this.states !== undefined;
  }
}

export const stateRoutes: Routes = [
  {
    path: "",
    component: StateComponent,
    canActivate: [UserAuthGuard],
  },
];
