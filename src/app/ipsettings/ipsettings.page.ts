import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
 

@Component({
  selector: 'app-ipsettings',
  templateUrl: './ipsettings.page.html',
  styleUrls: ['./ipsettings.page.scss'],
  // providers: [CommonService],
})
export class IpsettingsPage implements OnInit {
  ip = localStorage.getItem("ip")
  public ipform: FormGroup;
  http= "http://"
  // constructor(
  //   private router:Router
  // ) { }
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.ipform = this.formBuilder.group({
      ipaddress: ["", [Validators.required]],

    });
     console.log('fg')
  }
  ngOnInit() {
  }
  Click() 
  { 
   var count = "1"
    localStorage.setItem('Count',count)
    localStorage.setItem('ip',this.ipform.value.ipaddress)
    localStorage.setItem("ipaddress",this.http + this.ipform.value.ipaddress)
     this.router.navigate(["login"]);
     setTimeout(function() {
    window.location.reload();
   }, 100);
   }
}
