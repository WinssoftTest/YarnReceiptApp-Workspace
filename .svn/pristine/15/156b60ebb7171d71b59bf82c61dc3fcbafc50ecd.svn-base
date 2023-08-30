import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { appsettings } from 'src/app/appsettings';
const httpOptions = {
  headers: {
    "Content-Type": "application/json"
  },
  params: new HttpParams()
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public httpClient: HttpClient) { }

  LoginAPI(reqLogin) {
    let postData = JSON.stringify(reqLogin);
    return new Promise((resolve, reject) => {
       this.httpClient.post(
        localStorage.getItem("ipaddress") + appsettings.LoginAuthentication,
        postData,
        httpOptions
      )
        .subscribe(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        );
    });
  
  }
}
