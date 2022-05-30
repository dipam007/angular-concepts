import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',   
  styleUrls: ['./app.component.css']    
})
export class AppComponent {
  title = 'Angular Concepts World';
  name = "Dipam J. Patel";

  constructor(private router: Router){}

  goToAngularConcept(url: string){
    this.router.navigate([url])
  }
}


//ANGULAR TOPICS:
//===============
//1)components
//2)interpolation
//3)property binding
//4)class binding
//5)style binding
//6)event binding
//7)template reference variable
//8)two way binding
//9)ngIf, ngSwitch, ngFor
//10)component interaction
//11)pipes
//12)services
//13)Dependency injection
//14)HTTP and observables
//15)Fetch data using HTTP
//16)HTTP error handling
//17)Routing and Navigation
//18)Wildcard Route and Redirecting Routes
//Angular Forms
