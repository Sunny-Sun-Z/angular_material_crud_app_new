import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Employee } from './employee';

const options  = {
  headers: new HttpHeaders({ "Content-Type": "application/json"})
  }
 
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/employees'

  getEmployees(): Observable<Employee[]> {
    //console.log(`aaa:${this.http.get(this.url)}`);
    //console.log('getEmployees');
    
    return this.http.get<Employee[]>(this.url, options);
  }

  getEmployee(id: number): Observable<Employee> {
    
    const url = `${this.url}/${id}`;
    console.log('getEmployee',url);
    return this.http.get<Employee>(url);
  }

  addEmployee(emp:Employee): Observable<Employee>{
    //console.log('addEmployee');
    
    return this.http.post<Employee>(this.url, emp, options);
  }

  delete(id: number): Observable<Employee>{
    //console.log(`idddd:${id}`);
    
    return this.http.delete<Employee>(`${this.url}/${id}`);
    // this.http.get(`${this.url}/?id=${id}`).pipe(
    //   //(e)=>{ return e}
    //   map((e)=>{ return e})
    // )
  }

  updateEmployee(emp: Employee): Observable<Employee>{
   // console.log(`id::${emp}`);
    //console.log('updateEmployee');
    return this.http.put<Employee>(`${this.url}/${emp.id}`, emp, options);
  }

}
