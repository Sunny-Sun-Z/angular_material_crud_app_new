import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
// import { AdminModule } from './admin/admin.module';
// import { EmployeeComponent } from './rxjs-component-only/employee/employee.component';
// import { EmployeeDetailComponent } from './rxjs-component-only/employee/employee-detail.component';




const routes: Routes = [
  
  { path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
   // canMatch: [authGuard]
  },
 
 // {path: 'Admin', component:AdminComponent},
 //{path: '**', component:PageNotFouondComponent}
  {path: 'about', component: AboutUsComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
