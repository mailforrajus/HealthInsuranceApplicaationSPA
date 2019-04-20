import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaseWorkerServiceService } from '../case-worker-service.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-case-worker',
  templateUrl: './edit-case-worker.component.html',
  styleUrls: ['./edit-case-worker.component.css']
})
export class EditCaseWorkerComponent implements OnInit {

  userId: any;
  private updateStatus: any;
  editInfoSubscribe: any;
  resultInfoUsingUserId: any;
  updateCaseWorker: FormGroup;
  userRoles: any = [{ "roleName": "Admin" }, { "roleName": "CaseWorker" }]
  constructor(private router: Router, private activatedService: ActivatedRoute, private service: CaseWorkerServiceService, private formBuilder: FormBuilder) {

    this.updateCaseWorker = this.formBuilder.group({
      userId: '',
      activeSw: '',
      createdDate: '',
      createdBy: '',
      updatedDate: '',
      updatedBy: '',
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]],
      dob: ['', Validators.required],
      phno: ['', [Validators.pattern('^[1-9][0-9]{9}$'), Validators.required]],
      userRole: ['', Validators.required],
    })

  }

  ngOnInit() {

    //Reading the parameter(userId)
    this.userId = this.activatedService.params.subscribe(params => {
      this.userId = +params['userId'];

      //Sending the request to server with userId
      this.editInfoSubscribe = this.service.getDetailsUsingUserId(this.userId).subscribe(
        data => {
          this.updateCaseWorker.setValue(data);
        }, this._errorCallBack
      );//end of server request()

    });//end of reading paramters
  }
  public _errorCallBack = (err: HttpErrorResponse) => {
    console.log(err);
  }

  public updateInfo() {
    console.log(this.updateCaseWorker.value)
    this.service.updateCaseWorkerInfo(this.updateCaseWorker.value).subscribe(data => {
      this.updateStatus = data;
      if (this.updateStatus) {
        this.router.navigate(['viewCaseWorker'])
      }
    }, this._errorCallBack)

  }
}
