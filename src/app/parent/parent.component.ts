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