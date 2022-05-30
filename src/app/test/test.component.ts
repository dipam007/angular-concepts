import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',   //template: `<h1>Dipam Patel</h1><h2>Inline Templet</h2>`
  styleUrls: ['./test.component.css']     //styles: [`h1{color: red} h2{font-size: 12px}`]
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
