import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { HeroComponent } from './hero/hero/hero.component';
import { EmployeeDashBoardComponent } from './employee/employee-dash-board/employee-dash-board.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
//import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
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
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
@NgModule({
  declarations: [
    AdminComponent,
    HeroComponent,
    EmployeeDashBoardComponent,
    EmpAddEditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatSnackBarModule,
  ]
})
export class AdminModule { }
