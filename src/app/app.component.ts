import { Component } from '@angular/core';
import {Service} from '../service/Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public get: Service) {

  }
  title = 'app';
  getInfo() {
    this.get.getInfo()
      .subscribe((response) => {
        console.log(response);
    }
