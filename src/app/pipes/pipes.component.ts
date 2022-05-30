import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  public statement = "Hello My name is dipam patel";
  public users = [
    {
      "name": "Dipam Patel",
      "age": "21"
    },
    {
      "name": "Deep Patel",
      "age": "22"
    }
  ];

  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
