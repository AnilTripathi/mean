"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var task_service_1 = require("../../service/task.service");
var moment = require("moment");
var TaskComponent = (function () {
    function TaskComponent(taskService) {
        var _this = this;
        this.taskService = taskService;
        this.taskService.getTasks().subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    }
    TaskComponent.prototype.addTask = function (event) {
        var _this = this;
        event.preventDefault();
        var cdate = moment().format('YYYY-MM-DD h:m:s');
        var newTask = {
            title: this.title,
            isDone: false,
            createdDate: cdate
        };
        this.taskService.addTask(newTask).subscribe(function (task) {
            _this.title = '';
            _this.tasks.push(task);
        });
    };
    TaskComponent.prototype.deleteTask = function (id) {
        var tasks = this.tasks;
        this.taskService.deleteTask(id).subscribe(function (data) {
            if (data.affectedRows == 1) {
                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i].id == id) {
                        tasks.splice(i, 1);
                    }
                }
            }
        });
    };
    TaskComponent.prototype.updateTask = function (task) {
        var cdate = moment().format('YYYY-MM-DD h:m:s');
        var _task = {
            id: task.id,
            title: task.title,
            isDone: !task.isDone,
            createdDate: cdate
        };
        this.taskService.updateTask(_task).subscribe(function (data) {
            task.isDone = !task.isDone;
        });
    };
    return TaskComponent;
}());
TaskComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tasks',
        templateUrl: 'task.component.html',
        providers: [task_service_1.TaskService]
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskComponent);
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map