import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';

  date = new Date();

  name = "bhadresh";
  str: string = 'abcdefghij';

  f1="fullDate";
  showOnClick() {
    this.f1 = "MM/dd/yyyy";
    //alert('hi!');

  }

}
