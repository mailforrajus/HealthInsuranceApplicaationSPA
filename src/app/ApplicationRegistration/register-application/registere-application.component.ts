import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-registere-application',
  templateUrl: './registere-application.component.html',
  styleUrls: ['./registere-application.component.css']
})
export class RegistereApplicationComponent implements OnInit {

  ssnInfo: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ssnInfo = this.formBuilder.group({
      registrationId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      surName: ['', Validators.required],
      dob: ['', Validators.required]
    })
  }

}
