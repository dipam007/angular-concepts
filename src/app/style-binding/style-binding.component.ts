import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  public hasError = false;
  public highlightColor = "blue";
  public titleStyle={
    "color": "grey",
    "font-style": "italic"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
