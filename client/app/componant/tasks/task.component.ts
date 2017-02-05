import { Component } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../../task';
import * as moment from 'moment';
@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'task.component.html',
  providers: [TaskService]
})
export class TaskComponent {
  tasks: Task[];
  title: string;
  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask(event: any) {
    event.preventDefault();
    var cdate = moment().format('YYYY-MM-DD h:m:s');
    var newTask = {
      title: this.title,
      isDone: false,
      createdDate: cdate
    }
    this.taskService.addTask(newTask).subscribe(task => {
      this.title = '';
      this.tasks.push(task);
    });
  }

  deleteTask(id: any) {
    var tasks = this.tasks;
    this.taskService.deleteTask(id).subscribe(data => {
      if (data.affectedRows == 1) {
        for (var i = 0; i < tasks.length; i++) {
          if (tasks[i].id == id) {
            tasks.splice(i, 1);
          }
        }
      }
    });
  }
  updateTask(task: any) {
    var cdate = moment().format('YYYY-MM-DD h:m:s');
    var _task = {
      id: task.id,
      title: task.title,
      isDone: !task.isDone,
      createdDate: cdate
    }
    this.taskService.updateTask(_task).subscribe(data => {
      task.isDone = !task.isDone;
    })
  }

}