import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  msgOnButtonClick: string;
  msgOnChildCompInit: String;

  name = 'Angular';

  receivedMessageHandler(p) {
    this.msgOnButtonClick = p;
  }

  receiveAutoMsgHandler(p) {
    this.msgOnChildCompInit = p;
  }
}
