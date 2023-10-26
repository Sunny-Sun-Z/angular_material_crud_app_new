import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EmployeeDetailComponent } from '../rxjs-component-only/employee/employee-detail.component';
import { EmployeeListComponent } from '../rxjs-component-only/employee/employee-list.component';
import { SearchFunctionComponent } from '../rxjs-component-only/oasis/search-function/search-function.component';
import { EmpListComponent } from '../rxjs-component-only/oasis/emp-list/emp-list.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'employees', component: EmployeeListComponent,
        children: [
          { path: 'details/:id', component: EmployeeDetailComponent },
         
        ]
      },
      {path: 'oasis', component: SearchFunctionComponent,
      children:[
        {path: 'emplist', component: EmpListComponent},
        {path: 'empdetails/:id', component: EmpListComponent}
      ]
    },
      
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
