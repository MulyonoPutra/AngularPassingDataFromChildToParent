import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  receivedMessages: string;
  msgOnChildCompInit: String;

  name = 'Angular';

  receivedMessageHandler(e) {
    this.receivedMessages = e;
  }

  receiveAutoMsgHandler(p) {
    this.msgOnChildCompInit = p;
  }

}