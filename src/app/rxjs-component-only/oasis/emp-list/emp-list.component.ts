import { Component } from '@angular/core';
import { Observable, Subject, distinctUntilChanged, from, of, switchMap } from 'rxjs';
import { Emp } from 'src/app/services/emp';
import { Employee } from 'src/app/services/employee';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})

// bad version
export class EmpListComponent {
  selectedId = Observable<number>//new Subject<number>();
  selectedEmp?: Emp;//= {id:0, firstName: '', email:''};
  employees$: Observable<Emp[]>;
  constructor(private service : EmployeeService, private router:Router, private route: ActivatedRoute){
    this.employees$ = this.service.getEmps();
  }

  onSelected(emp: Emp){
     this.selectedEmp = emp;
   // this.router.navigate(['../oasis/empdetails', emp.id], {relativeTo: this.route});
  }
}

// good version
// export class EmpListComponent {
//   selectedId = new Subject<number>();
//   selectedEmp: Observable<Emp>;
//   employees$: Observable<Emp[]>;
  

//   constructor(private service : EmployeeService){
//     this.employees$ = this.service.getEmps();

//     this.selectedEmp = this.selectedId.pipe(
//       distinctUntilChanged(),
//       switchMap((id)=>{
//         console.log('fdfd')
//        return this.service.getEmployee(id)
        
//       })
//     )

//   }
// }
