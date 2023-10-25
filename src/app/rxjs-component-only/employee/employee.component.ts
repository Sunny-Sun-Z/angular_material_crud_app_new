import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, of, switchMap } from 'rxjs';
import { Employee } from 'src/app/services/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  @Input() employee!: Employee;
  @Output() selected = new EventEmitter();
  constructor(private service: EmployeeService, private route : ActivatedRoute){
    // this.route.paramMap.pipe(
    //   map(p => {
    //     if (p.get('id')===null)
    //       return 0
    //     else
    //       return parseInt(p.get('id')!.toString())
    //   } ),
    //   switchMap((id)=> this.employee$=this.service.getEmployee(id))
    //   )
      
    }
   
    onSelect(){
      this.selected.emit(this.employee);
    }
  
}
