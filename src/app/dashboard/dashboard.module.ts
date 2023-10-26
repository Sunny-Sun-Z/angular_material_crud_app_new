import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { EmployeeListComponent } from '../rxjs-component-only/employee/employee-list.component';
import { EmployeeComponent } from '../rxjs-component-only/employee/employee.component';
import { EmployeeDetailComponent } from '../rxjs-component-only/employee/employee-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';


import { SearchFunctionComponent } from '../rxjs-component-only/oasis/search-function/search-function.component';
import { EmpListComponent } from '../rxjs-component-only/oasis/emp-list/emp-list.component';
import { EmpComponent } from '../rxjs-component-only/oasis/emp/emp.component';
import { EmpDetailsComponent } from '../rxjs-component-only/oasis/emp-list/emp-details.component';
@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    EmployeeListComponent,
    SearchFunctionComponent,
    EmpListComponent,
    EmpComponent,
    EmpDetailsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    
  ]
})
export class DashboardModule { }
