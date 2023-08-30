import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
 
import { CommonService } from '../abi/common.service';
 

@Component({
  selector: 'app-receipt-open-form-edit',
  templateUrl: './receipt-open-form-edit.page.html',
  styleUrls: ['./receipt-open-form-edit.page.scss'],
})
export class ReceiptOpenFormEditPage implements OnInit {
 
  companyArr: any;
  username: any;
  HomeForm: any;
  WarehouseNameArr: unknown;
  Company = localStorage.getItem('Company');
  Branch = localStorage.getItem('Branch');
  year = localStorage.getItem('Year');
  selectArray = JSON.parse(localStorage.getItem("SelectArray")); 
 
  UserName = localStorage.getItem('User')
 
   
  SaveData: any;
  user: string;
  Y_Rec_NO: any;
  YarnReceiptForm: any;
  enableDisableRule(job) {}
  constructor(
    private commonprovider: CommonService,
    private _ho: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  
  ) {
    this.YarnReceiptForm = this._ho.group({
  
    });
 console.log('array',this.selectArray )
  }
 
  back()
  {
    this.router.navigate(['receipt-open-form']);
  }
  View()
  {
     this.router.navigate(['receipt-open-form-edit']);
  }
 
  
 

  ngOnInit() {}
}