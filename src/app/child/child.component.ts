import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() childButtonEvent = new EventEmitter();

  messages: string = 'This message is appeared automatically as the child component will intialized. This message is defined in the child component ngOninit method';

  messages1: string = 'This message is appearing here because user has clicked the button which is available in child component';

  constructor() { }

  ngOnInit() {
    // this.onInitEvent.emit(this.messages);
  }

  clickHandler() {
    this.childButtonEvent.emit(this.messages1);
  }

}