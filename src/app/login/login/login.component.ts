import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ARServiceService } from '../arservice.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInInfo: any;
  logInStatus: any;
  constructor(private formbuilder: FormBuilder, private arService: ARServiceService) { }

  ngOnInit() {
    this.logInInfo = this.formbuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  login(): any {
    this.arService.validateUserCredantials(this.logInInfo.value.userName, this.logInInfo.value.password).
      subscribe(data => {
        this.logInStatus = data;
      },
        this._errorCallBack);

  }
  public _errorCallBack = (err: HttpErrorResponse) => {
    console.log(err);
  }
}
