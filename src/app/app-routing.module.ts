import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeFullDetailComponent } from './employee-full-detail/employee-full-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipesComponent } from './pipes/pipes.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TempletReferenceVariableComponent } from './templet-reference-variable/templet-reference-variable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

const routes: Routes = [
  // {path:"", component: EmployeeListComponent},    //It is default component using component  OR
  {path:"", redirectTo: '', pathMatch: 'full'},    //It is default component using redirectTo (pathMatch is compalsary)
  {path: "employeeDetails", component: EmployeeDetailComponent},
  {path: "employeeList", component: EmployeeListComponent},
  {
    path: "employeeDetails/:id", 
    component: EmployeeFullDetailComponent,
    children: [          //Child Route
      {path:'employeeOverview', component: EmployeeOverviewComponent},
      {path:'employeeContact', component: EmployeeContactComponent}
    ]        
  },


  {path: 'classBinding', component: ClassBindingComponent},
  {path: 'eventBinding', component: EventBindingComponent},
  {path: 'interpolation', component: InterpolationComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'propertyBinding', component: PropertyBindingComponent},
  {path: 'structuralDirectives', component: StructuralDirectivesComponent},
  {path: 'styleBinding', component: StyleBindingComponent},
  {path: 'templetReferenceVariable', component: TempletReferenceVariableComponent},
  {path: 'twoWayBinding', component: TwoWayBindingComponent},


  {path: "**", component: PageNotFoundComponent}   //It is a Wildcard route. It always at the end in Routes. 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [EmployeeDetailComponent, 
                                  EmployeeListComponent, 
                                  EmployeeFullDetailComponent, 
                                  EmployeeOverviewComponent,
                                  EmployeeContactComponent,

                                  ClassBindingComponent,
                                  EventBindingComponent,
                                  InterpolationComponent,
                                  PipesComponent,
                                  PropertyBindingComponent,
                                  StructuralDirectivesComponent,
                                  StyleBindingComponent,
                                  TempletReferenceVariableComponent,
                                  TwoWayBindingComponent,

                                  PageNotFoundComponent
                                ];
