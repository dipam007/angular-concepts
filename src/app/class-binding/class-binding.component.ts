import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styles: [`
    .text-success{
      color: green;
    }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: italic;
    }
  `]
})
export class ClassBindingComponent implements OnInit {
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true; 
  public myClass = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
