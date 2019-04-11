import { Component, OnInit } from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: "app-tasks-component",
  styleUrls: ['./tasks-list.component.css'],
  templateUrl: "./tasks-list.component.html"
})
export class TasksComponent implements OnInit {

  constructor(private router: Router) {

  }

  btnClick = () => {
    this.router.navigateByUrl('/create-task');
  };

  ngOnInit() {
  }
}
