import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CaseWorkerServiceService {

  constructor(private httpClient: HttpClient) { }

  //Sending info to server
  public saveRegistrationInfo(formData: any): any {
    return this.httpClient.post("http://localhost:8081/saveCaseWorkerInfo", formData);
  }

  public emailExistane(enteredMail: String): any {
    return this.httpClient.post("http://localhost:8081/checkEmailId", enteredMail);
  }

  public getCaseworkersInfo(): any {
    return this.httpClient.get("http://localhost:8081/displayAllCaseWorkerInfo");
  }

  public activateCaseWorker(emailId: any) {
    return this.httpClient.get("http://localhost:8081/activateCaseWorker?emaildId=" + emailId);
  }

  public deactivateCaseWorker(emailId: any) {
    return this.httpClient.get("http://localhost:8081/deActivateCaseWorker?emaildId=" + emailId);
  }
  
  public getCaseworkersInfoUsingPageNumber(obj: any) {
    return this.httpClient.get("http://localhost:8081/displayAllCaseWorkerInfo?cpn=" + obj);
  }

  public getDetailsUsingUserId(userId: any) {
    return this.httpClient.get("http://localhost:8081/getCaseWorkerDetailsUsigUserId?userId=" + userId);
  }
  public updateCaseWorkerInfo(caseworkerInfo:any){
    return this.httpClient.post("http://localhost:8081/updateCaseWorkerInfo",caseworkerInfo);
    
  }
}


