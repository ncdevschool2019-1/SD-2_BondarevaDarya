import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
// Data service
export class TasksService {

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<any>  {
    return this.http.get<any>('/api/tasks');
  }
}
