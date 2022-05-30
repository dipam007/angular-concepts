import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  public greeting = "";
  public eventType = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any){
    console.log("Button Clicked");
    console.log(event);
    this.eventType = event.type;
    this.greeting = "Good Morning";
  }

  onHover(event: any){
    console.log("Button Hover");
    this.eventType = event.type;
  }
}
