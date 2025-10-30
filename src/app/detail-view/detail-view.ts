import { Component, OnInit } from '@angular/core';
import {TaskItem} from './task-item/task-item';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-detail-view',
  standalone: true,
  templateUrl: './detail-view.html',
  styleUrls: ['./detail-view.scss'],
  imports: [
    CommonModule,
    TaskItem,
    RouterLink
  ]
})
export class DetailView implements OnInit {

  title: string = '';
  description: string = '';
  tasks: any[] = [{task: "newTask"}, {task: "newTask"}];

  ngOnInit() {
    this.loadDetails();
    window.addEventListener('storage', () => this.loadDetails());
  }

  loadDetails() {
    this.title = localStorage.getItem('DetailTitle') ?? '';
    this.description = localStorage.getItem('DetailDescription') ?? '';
    const stored = localStorage.getItem(`TaskList/${this.title}`);
    const parsed = stored ? JSON.parse(stored) : [];
    console.log(parsed);
    this.tasks = parsed;
  }
}
