import { Component, OnInit } from '@angular/core';
import { CaseWorkerServiceService } from '../case-worker-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from "@angular/router";
@Component({
  selector: 'app-view-case-worker',
  templateUrl: './view-case-worker.component.html',
  styleUrls: ['./view-case-worker.component.css']
})
export class ViewCaseWorkerComponent implements OnInit {

  casewokersSubscribe: any;
  caseworkersResult: any;
  currentPageNumber: number;
  activateStatus: any;
  deactivateStatus: any;
  conditionResult: any;
  totalPages: number[];
  constructor(private caseWorkerService: CaseWorkerServiceService, private route: Router) {

  }

  ngOnInit() {
    console.log("inside");
    this.casewokersSubscribe = this.caseWorkerService.getCaseworkersInfo().subscribe(
      res => {
        this.caseworkersResult = res;
        this.totalPages = new Array(this.caseworkersResult.tp);
      }, this._errorCallBack
    );
  }
  public _errorCallBack = (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {
      console.log("Client side errors")
    } else {
      console.log(err)
      console.log("server side errors");
    }
  }

  //Editing the case worker info
  editCaseWorker(userId: any) {
    if (confirm("Are you sure wants to update?")) {
    
      this.route.navigate(['ediCaseWorkerDetails',userId]);
    }
  }

  //Deactivating the case worker
  deactivateCaseWorker(emailId: any, currentPageNumber: any) {

    if (confirm("Are you sure wants to deactivate?")) {
      this.caseWorkerService.deactivateCaseWorker(emailId).subscribe(
        res => {
          this.deactivateStatus = res;
          if (this.deactivateStatus) {
            this.changePageNumber(currentPageNumber);
          }
        }, this._errorCallBack
      );
    }

  }
  //Activating the case worker
  activateCaseWorker(emailId: any, currentPageNumber: any) {
    if (confirm("Are you sure wants to Activate?")) {
      this.caseWorkerService.activateCaseWorker(emailId).subscribe(
        data => {
          this.activateStatus = data;
          if (this.activateStatus) {
            this.changePageNumber(currentPageNumber);
          }
        }
        , this._errorCallBack);
    }
  }

  /*It will work for both previous and Next buttons 
  */
  changePageNumber(obj: any): any {
    this.casewokersSubscribe = this.caseWorkerService.getCaseworkersInfoUsingPageNumber(obj).subscribe(
      res => {
        this.caseworkersResult = res;
      }, this._errorCallBack
    );
  }
}
