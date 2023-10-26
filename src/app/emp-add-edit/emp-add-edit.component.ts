import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';
import { Employee } from '../services/employee';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {
  @Input() addEditStatus?: string;
  educations = ['Bachelors', 'Masters', 'PostDr']

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder,
    private service: EmployeeService,
    private dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public currentEmployeeData: Employee,
    private coreService: CoreService
    ) {
    this.employeeForm = this.fb.group({
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

  ngOnInit(): void {
    this.employeeForm.patchValue(this.currentEmployeeData);
  }
  // onFormSubmit() {
  //   if (this.employeeForm.valid) {
  //     if (!this.currentEmployeeData) {
  //       //console.log(this.employeeForm.value)
  //       this.service.addEmployee(this.employeeForm.value).subscribe({
  //         next: (val: Employee) => {
  //           this.coreService.openSnackBar('Add Employee successfully!')
  //           this.dialogRef.close(true);
  //         },
  //         error: (err: any) => {
  //           console.log(`addemployee error: ${err}`);
  //         }
  //       })
  //     }
  //     else {
  //       this.service.updateEmployee(this.employeeForm.value).subscribe({
  //         next: (val: Employee) => {           
  //           this.coreService.openSnackBar('Update Employee successfully!')
  //           this.dialogRef.close(true);
  //         },
  //         error: (err: any) => {
  //           console.log(`updateEmployee error: ${err}`);
  //         }
  //       })
  //     }
  //   }
  // }


  onFormSubmit() {
    if (this.employeeForm.valid) {
      if (!this.currentEmployeeData) {
        //console.log(this.employeeForm.value)
        this.service.addEmployee(this.employeeForm.value).subscribe({
          next: (val: Employee) => {
            this.coreService.openSnackBar('Add Employee successfully!')
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(`addemployee error: ${err}`);
          }
        })
      }
      else {
        this.service.updateEmployee(this.employeeForm.value).subscribe({
          next: (val: Employee) => {           
            this.coreService.openSnackBar('Update Employee successfully!')
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(`updateEmployee error: ${err}`);
          }
        })
      }
    }
  }
}
