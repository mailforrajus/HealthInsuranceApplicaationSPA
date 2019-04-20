import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistereApplicationComponent } from './ApplicationRegistration/register-application/registere-application.component';
import { SearchApplicationComponent } from './ApplicationRegistration/search-application/search-application.component';
import { CollectDataComponent } from './DataCollection/collect-data/collect-data.component';
import { SearchCasesComponent } from './DataCollection/search-cases/search-cases.component';
import { EligibilityResultsComponent } from './DetermineEligibility/eligibility-results/eligibility-results.component';
import { ViewPendingNoticesComponent } from './Correspondence/view-pending-notices/view-pending-notices.component';
import { GenerateReportsComponent } from './Reports/generate-reports/generate-reports.component';
import { ViewHistoryNoticesComponent } from './Correspondence/view-history-notices/view-history-notices.component';
import { ViewProfileComponent } from './Profile/view-profile/view-profile.component';
import { EditProfileComponent } from './Profile/edit-profile/edit-profile.component';
import { CreateCaseWorkerComponent } from './Admin/create-case-worker/create-case-worker.component';
import { ViewCaseWorkerComponent } from './Admin/view-case-worker/view-case-worker.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { MyColorDirective } from './my-color.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EditCaseWorkerComponent } from './Admin/edit-case-worker/edit-case-worker.component';
import { PhNumberMaskingPipe } from './custompipe/ph-number-masking.pipe';
import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistereApplicationComponent,
    SearchApplicationComponent,
    CollectDataComponent,
    SearchCasesComponent,
    EligibilityResultsComponent,
    ViewPendingNoticesComponent,
    ViewHistoryNoticesComponent,
    GenerateReportsComponent,
    ViewProfileComponent,
    EditProfileComponent,
    CreateCaseWorkerComponent,
    ViewCaseWorkerComponent,
    DashBoardComponent,
    MyColorDirective,
    EditCaseWorkerComponent,
    PhNumberMaskingPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: CreateCaseWorkerComponent },
      { path: "viewCaseWorker", component: ViewCaseWorkerComponent },
      { path: "registerApplication", component: RegistereApplicationComponent },
      { path: "searchApplicationsDetails", component: SearchApplicationComponent },
      { path: "collectData", component: CollectDataComponent },
      { path: "searchCases", component: SearchCasesComponent },
      { path: "eligibilityDetermination", component: EligibilityResultsComponent },
      { path: "viewPendingNotices", component: ViewPendingNoticesComponent },
      { path: "viewHistoryNotices", component: ViewHistoryNoticesComponent },
      { path: "generateReports", component: GenerateReportsComponent },
      { path: "viewProfileDetails", component: ViewProfileComponent },
      { path: "editProfileDetails", component: EditProfileComponent },
      { path: "ediCaseWorkerDetails/:userId", component: EditCaseWorkerComponent },
      {path:"login", component:LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [DashBoardComponent]
})

export class AppModule { }
