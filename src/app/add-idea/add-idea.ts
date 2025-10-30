import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-add-idea',
  imports: [FormsModule, RouterLink],
  templateUrl: './add-idea.html',
  styleUrls: ['./add-idea.scss'],
})


export class AddIdea {
  title: string = "";
  description: string = "";

  constructor(private router: Router) {}

  add(){
    if(!this.title.trim() || !this.description.trim()) return;

    const stored = localStorage.getItem("Ideas");
    const parsedList = stored ? JSON.parse(stored) : [];
    parsedList.push({title: this.title, description: this.description});
    localStorage.setItem("Ideas", JSON.stringify(parsedList));

    this.title = "";
    this.description = "";

    this.router.navigateByUrl("/")

  }
}
