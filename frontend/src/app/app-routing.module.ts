import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CourseMasterComponent } from './JA/course-master/course-master.component';
import { ErpStudentMasterComponent } from './JA/erp-student-master/erp-student-master.component';
import { MarkentryComponent } from './markentry/markentry.component';
import { IAT1Component } from './iat1/iat1.component';
import { IAT2Component } from './iat2/iat2.component';
import { IAT3Component } from './iat3/iat3.component';

import { StudentTenthMarkComponent } from './JA/student-tenth-mark/student-tenth-mark.component';
import { UniversityMarksComponent } from './JA/university-marks/university-marks.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { TenthMarksComponent } from './student/tenth-marks/tenth-marks.component';
import { TwelvethIcseCbseMarkComponent } from './student/twelveth-icse-cbse-mark/twelveth-icse-cbse-mark.component';
import { TwelvethStateboardMarkComponent } from './student/twelveth-stateboard-mark/twelveth-stateboard-mark.component';
import { StudentTwelvethVocMarkComponent } from './student/student-twelveth-voc-mark/student-twelveth-voc-mark.component';
import { StudentarrerComponent } from './student/student-arrer/student-arrer.component';
import { CourseComponent } from './course/course.component';
import { QuestionsPartAComponent } from './questions-part-a/questions-part-a.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  
  {path:'mainpage',component:MainpageComponent,children:[ {path:'course_entry',component:CourseMasterComponent},
  {path:'university_entry',component:UniversityMarksComponent},
  {path:'10th_marks',component:StudentTenthMarkComponent},
  {path:'erp_student_master',component:ErpStudentMasterComponent},
  {path:'1oth_marks_entry',component:TenthMarksComponent},
  {path:'12th_Stateboard_mark',component:TwelvethStateboardMarkComponent},
  {path:'12th_icse_cbsc_mark',component:TwelvethIcseCbseMarkComponent},
  {path:'12th_vocational_mark',component:StudentTwelvethVocMarkComponent},
  {path:'student_arrer',component:StudentarrerComponent},
  {path:'questions-part-a',component:QuestionsPartAComponent},


 
 

  
  { path: 'markentry', component: MarkentryComponent,children:[{ path: 'iat1', component: IAT1Component },
  { path: 'iat2', component: IAT2Component },
  { path: 'iat3', component: IAT3Component }] },
  { path: 'course', component: CourseComponent },

]},

  



  // {path:'',component:DashboardComponent},
  
  // {
  //   path: 'payments',
  //   loadChildren: () =>
  //     import('./payments/payments.module').then((m) => m.PaymentsModule),
  // },
  // {
  //   path: 'loans',
  //   loadChildren: () =>
  //     import('./loans/loans.module').then((m) => m.LoansModule),
  // },
  // {
  //   path: 'invoices',
  //   loadChildren: () =>
  //     import('./invoices/invoices.module').then((m) => m.InvoicesModule),
  // },
  // {
  //   path: 'settings',
  //   loadChildren: () =>
  //     import('./settings/settings.module').then((m) => m.SettingsModule),
  // },
  // { path: 'loan-types', loadChildren: () =>
  //  import('./loan-types/loan-types.module').then(m => m.LoanTypesModule) },
  // { path: 'reports', loadChildren: () =>
  // import('./reports/reports.module').then(m => m.ReportsModule) },
  // { path: 'activity', loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule) },
  // {path:'**' , component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
