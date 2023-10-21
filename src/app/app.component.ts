import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';
import { Observable, map, switchMap, tap } from 'rxjs';
import { Employee } from './services/employee';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NumberInput } from '@angular/cdk/coercion';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
})
export class AppComponent {
  title = 'angular_material_crud_app_new';
  //isLoading: Observable<boolean>;
//   @ViewChild(MatPaginator) paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;

//  // addEditStatus = 'add'
//  // currentEmployee?:Employee;
//   displayedColumns: string[] = ['firstName', 'lastName', 'dob', 'email','gender','education','company','experience','package','action' ];
//   dataSource: MatTableDataSource<Employee>= new MatTableDataSource();;
//   //employees: MatTableDataSource<Employee>;

//   constructor(private dialog: MatDialog,
//      private service: EmployeeService,
//      private coreService: CoreService){
    
//      this.getEmployees();
//   }

//   // ngAfterViewInit() {
    
//   //   this.dataSource.paginator = this.paginator;
//   //   this.dataSource.sort = this.sort;
//   // }

//   openAddEditEmpForm(){
//     const dialogRef = this.dialog.open(EmpAddEditComponent);
//     dialogRef.afterClosed().subscribe({
//       next: (val)=>{
//         if(val)
//           this.getEmployees();
//       }
//     })
//     //this.addEditStatus = 'add';
//   }

//   getEmployees(){
//     this.service.getEmployees().subscribe(
//       data=> {
//         this.dataSource = new MatTableDataSource(data);
//         this.dataSource.paginator = this.paginator;
//         this.dataSource.sort = this.sort;
//       }
//     );
//   }

  
  
//   // getEmployees2(){
    
//   //   this.service.getEmployees().pipe(map( data=>{
//   //       console.log('aaaa', data);
//   //       this.dataSource = new MatTableDataSource(data)
//   //     }))
//   //     .subscribe()
    
//   // }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }

//   deleteEmployee(id: number){
//     this.service.delete(id).subscribe(
//       {
//         next: (data)=> {
//           this.coreService.openSnackBar('Delete successfully!')
//           this.getEmployees();
//           console.log(`delete data: ${data}`);
//         },
//         error:(err) => console.log
//       }
//     );
//   }

//   openEditEmployee(data: Employee){
//    const dialogRef = this.dialog.open(EmpAddEditComponent, {
//       data
//    });

//    dialogRef.afterClosed().subscribe({
//     next: (val)=>{
//       if(val)
//         this.getEmployees();
//     }
//   })

//   }
}
