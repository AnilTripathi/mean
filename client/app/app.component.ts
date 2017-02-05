import { Component } from '@angular/core';
import {TaskService} from './service/task.service';
import * as moment from 'moment';
@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[TaskService]
})
export class AppComponent {
  currentDate: any;
  constructor(private taskService: TaskService) {
    this.currentDate = moment().format('DD-MMM-YYYY H:mm:ss A');
    setInterval(() => {
      this.currentDate =moment().format('DD-MMM-YYYY H:mm:ss A');
    }, 1000);
  }
  title = 'Tour of Heroes';
}