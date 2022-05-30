import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: { id: number, name: string, age: number}[];
  public errorMsg: any;

  constructor(private _employeeService: EmployeeService) {
    this.employees = [];
   }

   ngOnInit(): void {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                    error => this.errorMsg = error);
  }

}
