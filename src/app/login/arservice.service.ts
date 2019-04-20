import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ARServiceService {

  constructor(private http: HttpClient) {

  }

  public validateUserCredantials(userName: any, password: any) {
    
    return this.http.get("http://localhost:8081/validateUserCredantials?userName=" + userName + "&password=" + password);
  }

}
