import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Emp } from 'src/app/services/emp';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {
  //displayedColumns: string[] = ['firstName', 'email','gender'];
  @Input() employees$?: Observable<Emp[]>;
  @Output() selected = new EventEmitter();
  constructor(private service : EmployeeService){
    //this.employees$ = this.service.getEmps();
  }

  employeeSelected(emp: Emp){
   // console.log('aaaaa',this.selected);
    //this.selected.emit(emp.id);
    this.selected.emit(emp);
  }
}
