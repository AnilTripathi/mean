import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import {TaskComponent} from './componant/tasks/task.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,HttpModule
  ],
  declarations: [
    AppComponent,TaskComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }