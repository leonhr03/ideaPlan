import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-add-task',
    imports: [
        FormsModule,
        RouterLink
    ],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss',
})
export class AddTask {
    task: string = "";
    title: string= "";

    constructor(private router: Router) {}

    ngOnInit() {
      let storedTitle: any = localStorage.getItem("DetailTitle");
      this.title = storedTitle
    }

    add(){
      if(!this.task.trim()) return;

      const stored = localStorage.getItem(`TaskList/${this.title}`);
      const parsed = stored ? JSON.parse(stored) : [];
      parsed.push({task: this.task})
      localStorage.setItem(`TaskList/${this.title}`, JSON.stringify(parsed));

      this.router.navigateByUrl("/")
    }
}
