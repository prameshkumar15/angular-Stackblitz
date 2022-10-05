import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name1 = 'Angular ' + VERSION.major;
  onSubmitUser = (user) => {
    console.log(user);
  };
}
