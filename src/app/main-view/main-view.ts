import { Component } from '@angular/core';
import {SideBar} from '../side-bar/side-bar';
import {DetailView} from '../detail-view/detail-view';

@Component({
  selector: 'app-main-view',
  imports: [
    SideBar,
    DetailView
  ],
  templateUrl: './main-view.html',
  styleUrl: './main-view.scss',
})
export class MainView {

}
