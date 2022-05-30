import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employees: { id: number, name: string, age: number, contact: number}[];
  public errorMsg: any;

  public selectedEmployeeId: any;
  public message!: string;

  constructor(private _employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { 
    this.employees = [];
  }

  ngOnInit(): void {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                    error => this.errorMsg = error);

    this.route.paramMap.subscribe((params: ParamMap) => {
        let id = params.get('id');
        this.selectedEmployeeId = id != null ? parseInt(id) : null;
        this.message = params.get('msg') ?? "";
    })
  }

  onSelect(employee: any){
    this.router.navigate(['/employeeDetails', employee.id])          //It is simple routing and navigation
    // this.router.navigate([employee.id], {relativeTo: this.route});      //It is Relative Navigation. Use: If we need to change url from /employeeDetails to /empDetail then only change in app-routing module.
  }

  isEmployeeSelected(employee: any){
    return employee.id === this.selectedEmployeeId;
  }

}
