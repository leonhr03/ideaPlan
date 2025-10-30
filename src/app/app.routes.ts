import { Routes } from '@angular/router';
import {MainView} from './main-view/main-view';
import {AddIdea} from './add-idea/add-idea';
import {AddTask} from './add-task/add-task';

export const routes: Routes = [
  {path: "", component: MainView},
  {path: "add", component: AddIdea},
  {path: "addTask", component: AddTask}
];
