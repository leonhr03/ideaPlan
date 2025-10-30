import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ListView } from './list-view/list-view';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, ListView],
  templateUrl: './side-bar.html',
  styleUrls: ['./side-bar.scss'],
})
export class SideBar {

  ideas: { title: string; description: string }[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const storedItems = localStorage.getItem('Ideas');
      this.ideas = storedItems ? JSON.parse(storedItems) : [];
    }
  }

  onPress(title: string): void {
    const idea: any = this.ideas.find(i => i.title === title);
    localStorage.setItem('DetailTitle', idea.title);
    localStorage.setItem("DetailDescription", idea.description);
    window.dispatchEvent(new Event('storage'));
  }
}
