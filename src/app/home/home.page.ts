import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../abi/common.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  companyArr: any;
  username: any;
  HomeForm: any;
  WarehouseNameArr: unknown;
 Company=localStorage.getItem("Company");
 Branch=localStorage.getItem("Branch");
 year = localStorage.getItem("Year")
  WorkOrderNumberArr: unknown;
  PartyNameArr: unknown;
  OrderNumberArr: unknown;
  WorkOrderNo: any;
  WorkOrder;
  FormDate:any;
  Todate:any;
  OpenFormArr: any;

  constructor(
    private commonprovider: CommonService,
    private _ho: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.HomeForm = this._ho.group({
      Warehouse: ["", [Validators.required]],
      WorkOrder:["",[Validators.required]],
      FormDate:["",[Validators.required]],
      Todate:["",[Validators.required]]
     });
     console.log('Its Work')
     this.WareHouseNameLoad ();
     this.PartyNameLoad ();
     this.WorkOrderNumberLoad();
  }
 WareHouseNameLoad ()
  {
   var req = {
    company:this.Company,
    Branch_Name:this.Branch,
    statement:"Receipt"
    };
    this.commonprovider.GetWareHouseNameLoad(req).then((result) => {
      this.WarehouseNameArr = result;
      console.log("BranchName", this.WarehouseNameArr)
      return true;
    });
  }
  onchangeToDate(event)
  {
    this.OpenFormLoad();
  }
  onchangeDate(event)
  {
  console.log(this.FormDate)
  }
  onchangeWorkorder(event)
  {
    console.log("wrk",this.WorkOrder)
this.OrderNumberLoad() 
  }
  PartyNameLoad ()
  {
   var req = {
    Company:this.Company,
    Branch_Name:this.Branch,
    statement:"Receipt",
    Years:this.year
    };
    this.commonprovider.GetPartyNameLoad(req).then((result) => {
      this.PartyNameArr = result;
      console.log("PartyNameArr", this.PartyNameArr)
      return true;
    });
  }
  WorkOrderNumberLoad ()
  {
   var req = {
    Company:this.Company,
    Years:"22-23",
    statement:"Receipt",
    
    };
    this.commonprovider.GetWorkOrderNumberLoad(req).then((result) => {
      this.WorkOrderNumberArr = result;
      console.log("WorkOrderNumber", this.WorkOrderNumberArr)
      return true;
    });
  }
  jobworkreceipt()
  {
    this.router.navigate(['jobworkreceipt'])
  }
  storesreceipt()
  {
    this.router.navigate(['storespurchasereceipt'])
  }
  fgpurchasereceipt()
  {
    this.router.navigate(['fgpurchasereceipt']) 
  }
 OrderNumberLoad()
  {
   var req = {
    Company:this.Company,
    Years:this.year,
    // Supplier:"",
    Workorderno:this.WorkOrder,
    // Date1:this.FormDate,
    // Date2:this.Todate
  };
    this.commonprovider.GetOrderNumberLoad(req).then((result) => {
      this.OrderNumberArr = result;
      console.log("OrderNumber", this.OrderNumberArr)
      return true;
    });
  }
  OpenFormLoad()
  {
   var req = {
    Company:this.Company,
    Years:this.year,
    Supplier:"",
    Workorderno:this.WorkOrder,
    Date1:this.FormDate,
    Date2:this.Todate
  };
    this.commonprovider.GetOpenFormLoad(req).then((result) => {
      this.OpenFormArr = result;
      console.log("OrderNumber", this.OpenFormArr)
      return true;
    });
  }
  yarnreceipt()
  {
   this.router.navigate(["yarnrecipt"])
  }
  yarnReturnreceipt()
  {
   this.router.navigate(["returnreceipt"])
  }
  yarnreceiptOpenForm()
  {
   this.router.navigate(["receipt-open-form"])
  }
  weaving()
  {
    this.router.navigate(["weaving"])
  }
  Back() 
  {
  localStorage.removeItem("User");
  localStorage.removeItem("Username")
    console.log('1236',localStorage.removeItem("User"));
    localStorage.removeItem("Company")
    localStorage.removeItem("Branch");
    localStorage.removeItem("User")
     localStorage.clear();
   // window.location.reload();
     this.router.navigate(['/login']);
    //  setTimeout(function() {
    //   window.location.reload();
    //  }, 500);
}
  }

  
  
  
