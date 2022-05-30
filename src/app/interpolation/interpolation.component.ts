import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  public title = 'Angular Concepts Interpolation';
  public siteUrl = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello! My name is Dipam";
  }
}
