import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomerCRUD';
  name = 'Rohit';
  dob = new Date(1997, 5 , 5);
  salary = 46465;
}
