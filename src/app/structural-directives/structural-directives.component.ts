import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
  public displayName = true;
  public myColor = "orange";
  public colors = ['red', 'blue', 'green', 'yellow']; 

  constructor() { }

  ngOnInit(): void {
  }

}
