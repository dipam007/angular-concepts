import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  // @Input() public parentData: any;  
  // OR
  @Input('parentData') public myName: any;  //Receive data from the parent component

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this. childEvent.emit('Hey! My name is Dipam')
  }

}
