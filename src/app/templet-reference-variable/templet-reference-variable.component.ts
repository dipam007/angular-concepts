import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templet-reference-variable',
  templateUrl: './templet-reference-variable.component.html',
  styleUrls: ['./templet-reference-variable.component.css']
})
export class TempletReferenceVariableComponent implements OnInit {
  public msg = "";

  constructor() { }

  ngOnInit(): void {
  }

  printMsg(val: any){
    this.msg = val;
  }
}
