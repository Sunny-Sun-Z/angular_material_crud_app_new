import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; //to use datepicker have to add this

import {MatTableModule} from '@angular/material/table';

import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import {MatSnackBarModule} from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageNotFouondComponent } from './page-not-fouond/page-not-fouond.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminModule } from './admin/admin.module';
import { EmployeeComponent } from './rxjs-component-only/employee/employee.component';
import { EmployeeDetailComponent } from './rxjs-component-only/employee/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
   // EmpAddEditComponent,
    PageNotFouondComponent,
    AboutUsComponent,
   
    
   
    // EmployeeComponent,
    // EmployeeDetailComponent,
    // EmployeeListComponent,
   
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
    DashboardModule,
    AdminModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
