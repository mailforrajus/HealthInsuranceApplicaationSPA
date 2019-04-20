import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CaseWorkerServiceService } from "../case-worker-service.service"


@Component({
  selector: 'app-create-case-worker',
  templateUrl: './create-case-worker.component.html',
  styleUrls: ['./create-case-worker.component.css']
})
export class CreateCaseWorkerComponent implements OnInit {

  caseworkerRegistrationData: FormGroup;
  saveFormDataSubscribe: any;
  saveFormResult: any;
  emailCheckSubscribe: any;
  emailFoundStatus: boolean = false;
  maxDateOfBirth = new Date(2019, 0, 1);
  userRoles: any = [{ "roleName": "Admin" }, { "roleName": "CaseWorker" }]
  constructor(private formBuilder: FormBuilder,
    private caseWorkerService: CaseWorkerServiceService) { }

  ngOnInit() {
    this.caseworkerRegistrationData = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]],
      dob: ['', Validators.required],
      phno: ['', [Validators.pattern('^[1-9][0-9]{9}$'), Validators.required]],
      userRole: ['', Validators.required],
    })
  }

  register(): any {
    this.saveFormDataSubscribe = this.caseWorkerService.saveRegistrationInfo(this.caseworkerRegistrationData.value).subscribe(
      (res) => {
        this.saveFormResult = res.status;
        if (this.saveFormResult) {
          this.caseworkerRegistrationData.reset();
        }
      }
      , this._errorCallBack);
  }

  emailIdValidationCheck($event): any {
    if ($event.target.value.length > 0) {
      this.emailCheckSubscribe = this.caseWorkerService.emailExistane($event.target.value).subscribe(
        (res): any => {
                if (res) {
                  this.emailFoundStatus = res;
                } else {
                  this.emailFoundStatus = false;
                }
         }, this._errorCallBack);
    }
  }

  public _errorCallBack = (err): any => {
    if(err.error instanceof Error){
      console.log("Client side errors");
      console.log(err.error.message)
    }else{
      console.log("server side errors...");
      console.log(err)
    }
    
  }

}
