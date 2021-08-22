import { Component } from '@angular/core';

@Component({
  // Added by icestark: 表示唯一的 angluar，防止命名冲突
  selector: '#angular-app app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
}
