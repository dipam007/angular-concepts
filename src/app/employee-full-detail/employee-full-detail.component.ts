import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";

@Component({
  selector: 'app-employee-full-detail',
  templateUrl: './employee-full-detail.component.html',
  styleUrls: ['./employee-full-detail.component.css']
})
export class EmployeeFullDetailComponent implements OnInit {
  public empId: any;
  public isDisabledPre = false;
  public isDisablednxt = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // let id = this.route.snapshot.paramMap.get('id');
    // this.empId = id !== null ? parseInt(id) : null;

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.empId = id !=null ? parseInt(id) : null;
      if(this.empId <= 1)
        this.isDisabledPre = true;
      else
        this.isDisabledPre = false;
    })
  }

  goPre(){
    let preId = this.empId - 1;
    // this.router.navigate(['/employeeDetails', preId]);         //It is simple routing and navigation
    this.router.navigate(['../', preId], {relativeTo: this.route});     //It is Relative Navigation
  }

  goNext(){
    let nxtId = this.empId + 1;
    // this.router.navigate(['/employeeDetails', nxtId]);              //It is simple routing and navigation
    this.router.navigate(['../', nxtId], {relativeTo: this.route});       //It is Relative Navigation
  }

  goBack(){
    let selectedId = this.empId;
    // this.router.navigate(['/employeeDetails', {id: selectedId, msg: "Note: Blue Color shows that you selected that employee and then back to employee details page."}]);              //It is simple routing and navigation
    this.router.navigate(['../', {id: selectedId, msg: "Note: Blue Color shows that you selected that employee and then back to employee details page."}], {relativeTo: this.route});    //It is Relative Navigation
  }

  showOverview(){
    this.router.navigate(['employeeOverview'], {relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['employeeContact', {id: this.empId}], {relativeTo: this.route});
  }

}
