import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name1 = 'Angular ' + VERSION.major;
  details1 = 'test';
  testcondition = { name: 'Ramesh', Age: 34 };
  onSubmitUser = (user) => {
    console.log(user);
  };
}
