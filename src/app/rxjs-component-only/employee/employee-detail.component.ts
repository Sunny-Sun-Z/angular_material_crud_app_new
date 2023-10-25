import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, merge, mergeMap, of, switchMap, tap } from 'rxjs';
import { Employee } from 'src/app/services/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  //constructor(private srvice: EmployeeService, private fb: FormBuilder){}
  employee?: Employee
  empForm: FormGroup

  constructor(private service: EmployeeService, private route: ActivatedRoute, private fb: FormBuilder) {
    //console.log('aaa', this.route.paramMap)
    // this.route.paramMap.subscribe(
    //   (p) => this.getEmployee(p.get('id')) 
    // )
    this.empForm = this.fb.group({
      firstName: 'a',
      lastName: 'b',
      dob: new Date('07/30/1969'),
      email: 'd',
      gender: 'male',
      education: 'Masters',
      company: 'g',
      experience: 10,
      package: 4,
      id: null
    })

    this.route.paramMap.pipe(
      switchMap(
        (p) => this.getEmployee(p.get('id'))
      )).subscribe(emp=>this.empForm.setValue(emp))
  }

  getEmployee(id: string | null) {
    if (!id) {
      return of({ id: 0, firstName: 'init', lastName: '', email: 'init', gender: '', dob: new Date('1969/07/30'), education: '', company: '', experience: 0, package: 0 });
      //console.log(`this.em1:${this.employee}`);

    }
    else
      return this.service.getEmployee(parseInt(id))//.subscribe(
    //   e => {
    //     if (e)
    //       this.employee = e
    //     else
    //       alert('null employee')
    //   });

    // this.empForm = this.fb.group({
    //   firstName: this.employee?.firstName,
    //   email: this.employee?.email,
    // })
  }

  async ngOnInit() {
    this.route.paramMap.subscribe(p => {
      this.getEmployee(p.get('id')).subscribe(x=>this.employee = x)
    });

  }

  onSubmit() {
    this.empForm = this.fb.group({
      firstName: 'a',
      lastName: 'b',
      dob: new Date('07/30/1969'),
      email: 'd',
      gender: 'male',
      education: 'Masters',
      company: 'g',
      experience: 10,
      package: 4,
      id: null
    })
  }

  get firstName() {
   // console.log('111', this.empForm.get('firstName')!);
    return this.empForm?.get('firstName')!
  }
  get lastName() { return this.empForm?.get('lastName')! }
  get email() { return this.empForm?.get('email')! }

  show(emp: Employee) {
    this.employee = emp;
  }

}


