import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-employee-contact',
  templateUrl: './employee-contact.component.html',
  styleUrls: ['./employee-contact.component.css']
})
export class EmployeeContactComponent implements OnInit {

  public employees: { id: number, name: string, age: number, contact: number}[];
  public errorMsg: any;
  public employeeID: any;

  constructor(private _employeeService: EmployeeService, private route: ActivatedRoute) { 
    this.employees = [];
  }

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data,
                error => this.errorMsg = error);

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.employeeID = id!=null ? parseInt(id) : null;
    });
  }

}
