 
  import { Injectable } from '@angular/core';  
  
  @Injectable({  
     providedIn: 'root'  
  })  
  export class AuthguradServiceService {

   Username = localStorage.getItem("User")
  
  
     getAuthStatus() {
      console.log('USERNAME',this.Username)
 
        if(this.Username == '' || this.Username == null ||  this.Username == undefined)
        return true
     }  
  
     constructor() {  
      console.log("NotWork")
  }  
  getLogOut() {
   console.log('Itworks')
  }
  }  
