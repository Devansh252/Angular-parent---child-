import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'childparent';
  techlist = ['SQL', 'Web', 'APP'];
  techList = ['SQL', 'Web', 'APP'];
  addItem(val: any) {
    this.techlist.push(val);
  }
  addItem2(val: any) {
    this.techList.push(val);
  }
}
