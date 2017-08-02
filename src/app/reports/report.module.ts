import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from './report.component' ;

// routes
 const ROUTES: Routes = [
  { path: '', component: ReportComponent }
];

@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
     RouterModule.forChild(ROUTES)
  ],
})
export class ReportModule { }
