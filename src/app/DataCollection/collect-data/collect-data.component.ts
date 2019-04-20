import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-collect-data',
  templateUrl: './collect-data.component.html',
  styleUrls: ['./collect-data.component.css']
})
export class CollectDataComponent implements OnInit {
  res: any = 1; //to load deault page as first one
  dataCollectionInfo: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dataCollectionInfo = this.formBuilder.group({
      firstName: '',
      lastName: '',
      cityName: '',
      streetName: '',
      primaryAcademicGoal: '',
      educationBackGround: '',
      familyBackGround: '',
      tutinMethods: ''
    })
  }
  gotoDiv(obj: any) {
    this.res = obj;
  }

  submitData() {
    console.log(this.dataCollectionInfo);
  }
}
