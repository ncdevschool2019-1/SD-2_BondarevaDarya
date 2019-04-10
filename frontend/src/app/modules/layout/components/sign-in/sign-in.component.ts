import { Component, OnInit } from "@angular/core";
import {TasksService} from "../../../../services/tasks.service";

@Component({
  selector: "app-sign-in-component",
  styleUrls: ['./sign-in.component.css'],
  templateUrl: "./sign-in.component.html"
})
export class SignInComponent implements OnInit {

  constructor(private taskService: TasksService) {

  }

  ngOnInit() {
    this.taskService.getTasks().
    subscribe((task) => {console.log(task.name)});
  }
}
