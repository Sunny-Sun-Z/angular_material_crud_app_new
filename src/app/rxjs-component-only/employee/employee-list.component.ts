import { Component } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { Employee } from 'src/app/services/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeComponent } from './employee.component';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[EmployeeComponent]
})
export class EmployeeListComponent  {
  employees$: Observable<Employee[]>;
  employeesFiltered$: Observable<Employee[]>;
  selectedEmployee?: Employee;

  constructor(private service: EmployeeService, private router:Router, private route: ActivatedRoute){
   this.employees$ = this.service.getEmployees();
   this.employeesFiltered$ = this.employees$.pipe(
    filter(users=>users.every(user=>user.lastName==='sun'))
    //filter(users=> users.filter((user)=>user.lastName==='sun'))  //wrong because the 2nd filter does not return bool.
   );
  }

  onSelected(emp: Employee){
   
    this.selectedEmployee = emp;
    /* either this way
     const url = `dashboard/employees/details/${emp.id}` 
     this.router.navigateByUrl(url);
     */
    // or this way:
     this.router.navigate(['../employees/details',emp.id],  {relativeTo: this.route})
  }

}
