import {Component, OnInit} from "@angular/core";

/*
enum ETaskPriorities {
  Blocker = "blocker",
  Critical = "critical",
  Major = "major",
  Normal = "normal",
  Minor = "minor",
}*/

@Component({
  selector: "app-new-task-form-component",
  styleUrls: ['./new-task-form.component.css'],
  templateUrl: "./new-task-form.component.html"
})
export class NewTaskFormComponent implements OnInit {

  priorities = ["blocker", "critical", "major", "normal", "minor"];
  statuses = ["open", "in progress", "ready for test", "closed"];

  constructor() {

  }

  ngOnInit() {
  }
}
