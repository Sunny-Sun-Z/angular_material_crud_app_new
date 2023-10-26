import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Emp } from 'src/app/services/emp';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit{
  @Input() employee:any;//{id:0, firstName: '', email:''};

  empForm: FormGroup = this.fb.group({
    id: 0,
    firstName:['a', [Validators.required, Validators.minLength(4)]],
    email: ['d', [Validators.email]],
  })

  constructor(private fb: FormBuilder, private service: EmployeeService, private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.employee as Emp);
  }
  get firstName() { return this.empForm.value.firstName;}
  get email (){return this.empForm.value.email;}
}
