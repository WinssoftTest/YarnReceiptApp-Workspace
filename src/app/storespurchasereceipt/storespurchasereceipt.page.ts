import { Component, OnInit } from '@angular/core';
import { CommonService } from '../abi/common.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
class PartyNameIns {
  public id!: number;
  public PartyName!: string;
}
class Workordr
{
  public id!: number;
  public WorkOrder!: string;
}
@Component({
  selector: 'app-storespurchasereceipt',
  templateUrl: './storespurchasereceipt.page.html',
  styleUrls: ['./storespurchasereceipt.page.scss'],
})
export class StorespurchasereceiptPage implements OnInit {
  Company = localStorage.getItem('Company');
  Branch = localStorage.getItem('Branch');
  year = localStorage.getItem('Year'); 
  UserName = localStorage.getItem('User')
  RecQty:any = localStorage.getItem('RecQty');
  wrkord=localStorage.getItem('wrkord');
  partycode= localStorage.getItem('PartyCode' );
  process= localStorage.getItem('process');
  order=localStorage.getItem('ordr');
  jobwork= localStorage.getItem('JobWork');
 
 
  partyname=localStorage.getItem('Partyname');
  Slipno = localStorage.getItem('SlipNo')
  WH: any;
  StoreReceipt: any;
  Warehousename:any;
  PartyNameIns!: PartyNameIns[]  ; 
  Workordr!: Workordr[];
  DC:any;
  Gatepass:any;
  supllier: any;
  BuyerId: any;
  PartyCode: any;
  WorkOrder:any;
  WrkOrderNumber: any;
  PartyName:any;
  receiptgrid: any;
  Selectedlistarr: any;
  Warehouse: any;
  Fpicheck:any=[];
  FPICHECK: any;
  count: any;
  constructor(private commonprovider: CommonService, 
    private _rr: FormBuilder,   public httpClient: HttpClient,
    public router: Router) {
       this.StoreReceipt =   this._rr.group({
      Warehouse:["",[Validators.required]],
      DC:["",[Validators.required]], Process:["",[Validators.required]], PartyName:["",[Validators.required]],
      Gatepass:["",[Validators.required]], SlipNo:["",[Validators.required]],WorkOrder:["",[Validators.required]],OrderNumber:["",[Validators.required]] })
      this.WareHouseNameLoad()
    }
    Whchange()
    {
      console.log(this.Warehousename)
      this. PartyNameLoad()
    }
  WareHouseNameLoad() {
    var req = {
      company: this.Company,
      Branch_Name: this.Branch,
      statement: 'WeavingFirstPices',
      UserName:this.UserName
    };
    this.commonprovider.GetWareHouseNameLoad(req).then((result) => {
      this.WH = result;
      console.log('WareHouseName', this.WH);
      return true;
    });
   }
    OrderNumberLoad()  {
    var req = {
    Company: this.Company,
    statement: 'storesreceipt',
    Years: this.year,
    PartyCode:this.PartyCode,
    Supplier_Name:  this.supllier,
    vendorid : this.BuyerId 
 
  };
  this.commonprovider.GetOrderNumberLoad(req).then((result) => {
    var res: any;
    res = result;
    this.Workordr = res;
      this.Workordr = [];
      for (let index = 0; index < res.length; index++) {
      const element = res[index];
      let req_name = {
        id: index + 1,
        WorkOrder: element.Yarn_Po_No,
         
      };
      this.Workordr.push(req_name);
    }
  console.log('RouteList',  this.Workordr);
  });
  }
  WorkOrders(event: { component: IonicSelectableComponent; value: any }) {
      
    console.log('tttttt:', event.value.WorkOrder);
    this.WrkOrderNumber = event.value.WorkOrder
    var req = {
      Company: this.Company,
      statement: 'CHECKFPIAPPROVAL',
      Years: this.year,
      PartyCode:this.PartyCode,
      Supplier_Name:  this.supllier,
      vendorid : this.BuyerId ,
      ponum:this.WrkOrderNumber
    };
    this.commonprovider.GetOrderNumberLoad(req).then((result) => {
      var res: any;
      res = result;
      this.count = res;
      console.log('this.count',this.count[0].count)
      if(this.count[0].count == 0)
      {
        alert('FPI is Pending' + ' - '+ this.WrkOrderNumber )
      }
    })

  }
   AddButoon()
   {
    var reqQ = {
      Company: this.Company,
      statement: 'FPICHECK',
      Years: this.year,
      buyerid : this.BuyerId ,
      order:this.WrkOrderNumber
    };
    this.commonprovider.GetOrderNumberLoad(reqQ).then((result) => {
      var res: any;
      res = result;
      this.Fpicheck = result;
    })
    
    for( var i = 0 ; i <this.Fpicheck.length ; i++)
    {
      this.FPICHECK = this.Fpicheck[i].Yarn_Po_No
    }
    console.log(this.FPICHECK)
  
      if(this.Warehousename == null ||  this.Warehousename == undefined)
    {
      this.commonprovider.FailedToast('Select Warehouse')
    } 
    else if( this.PartyName == "" || this.PartyName == undefined)
    {
      this.commonprovider.FailedToast('Select Supplier Name')
    } 
    else if( this.WorkOrder == "" || this.WorkOrder == undefined)
    {
      this.commonprovider.FailedToast('Select Order')
    } 
    else if( this.DC == "" || this.DC == undefined)
    {
      this.commonprovider.FailedToast('Type Dc No')
    } 
    else if( this.Gatepass == "" || this.Gatepass == undefined)
    {
      this.commonprovider.FailedToast('Gatepass No')
    } 
    else{
    var req = {
      company: this.Company,
      statement: 'storesreceipt',
      Years: this.year,
      PartyCode:this.PartyCode,
      Supplier_Name:  this.supllier,
      vendorid : this.BuyerId ,
      ponumber:this.WrkOrderNumber
    };
    this.commonprovider.storesReceiptgrid(req).then((result) => {
      var res: any;
      res = result;
      this.receiptgrid = res;
      console.log('GRIDD')
    });
   }
  }
   Clear()
   {
    this.PartyName="";
    this.WorkOrder ="";
    this.DC="";
    this.Gatepass="";
    this.receiptgrid=[];
    this.partyname="";

   }
   PartyNameLoad() {
    var req = {
    Company: this.Company,
       
    processNameload:"STORESRECEIPT"

  };
  this.commonprovider.GetPartyNameLoad(req).then((result) => {
    var res: any;
    res = result;
    this.PartyNameIns = res;
      this.PartyNameIns = [];
      for (let index = 0; index < res.length; index++) {
      const element = res[index];
      let req_name = {
        id: index + 1,
        PartyName: element.Name,
        PartyCode: element.party_Code,
        Buyer_id:element.Sup_Id

        };
      this.PartyNameIns.push(req_name);
    }
console.log('PartyNames',  this.PartyNameIns);
  });
}
portChanges(event: { component: IonicSelectableComponent; value: any }) {
    
  console.log('port:', event.value.PartyName);
  this.supllier = event.value.PartyName
  this.BuyerId = event.value.Buyer_id 
  this.PartyCode = event.value.PartyCode 
  this.OrderNumberLoad()

}
  ngOnInit() {
  }
  itemClick(d: any, index: any) {
      this.Selectedlistarr = []
 
       var item = d.selected;
       if (item == true) {
        d["selected"] = false;
        this.Selectedlistarr.splice(index, 1);
        this.Selectedlistarr = [];
        console.log('Selected',this.Selectedlistarr);
      } 
        {
       d["selected"] = true;
        this.Selectedlistarr.push(d);
        console.log('selectttttttttttttttt',this.Selectedlistarr)
     }
     localStorage.setItem('SELECTARR',JSON.stringify(this.Selectedlistarr))
     localStorage.setItem('DCno', (this.DC))
     localStorage.setItem('suppliername', (this.supllier))
     localStorage.setItem('PartyCode', ( this.PartyCode))
     localStorage.setItem('BuyerId', this.BuyerId)
     localStorage.setItem('Gatepassno', this.Gatepass)
     localStorage.setItem('PoNumSTORE',this.WrkOrderNumber )
     localStorage.setItem('Warehousen',this.Warehousename )
    this.router.navigate(["storesreceiptsave"])
  
   
  }
  BACK()
{
  this.router.navigate(['./home'])
}
}
