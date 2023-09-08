import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../abi/common.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import * as moment from 'moment';
class PartyNameIns {
  public id!: number;
  public PartyName!: string;
}
class Workordr
{
  public id!: number;
  public WorkOrder!: string;
}
class Orde
{
  public id!: number;
  public Orde!: string;
 }
 

@Component({
  selector: 'app-jobworkreceipt',
  templateUrl: './jobworkreceipt.page.html',
  styleUrls: ['./jobworkreceipt.page.scss'],
})

export class JobworkreceiptPage implements OnInit {
  jwReceipt: any;
  Warehouse:any;
 
  Workordr!: Workordr[];
  Orde!: Orde[];
  FabricForm: any;
  PartyNameIns!: PartyNameIns[]  ; 
  JobWork:any;
  Process:any;
  PartyName:any;
  WorkOrder:any;
  SlipNo:any;
  PartyNamew:any;
  Date=moment(new Date()).format('YYYY-MM-DD');
  Company = localStorage.getItem('Company');
  Branch = localStorage.getItem('Branch');
  year = localStorage.getItem('Year'); 
  UserName = localStorage.getItem('User')
  supllier: any;
  BuyerId: any;
  PartyCode: any;
  WrkOrderNumber: any;
  WH: any;
  ProcessName: any;
  OrderNumber:any;
  GatePass: any;
  ordr: any;
  jwreceipt: any;
  Selectedlistarr: any[];
  jwreceiptgrid: any;
  RecQty: any;
  Gatepass: any;
  GatepassNumLoad: any=[];
  yarnseetings: string;
  Featuresettings: unknown;
  constructor(private commonprovider: CommonService, 
    private _rr: FormBuilder,   public httpClient: HttpClient,
    public router: Router) {
    this.jwReceipt =   this._rr.group({
      Warehouse:["",[Validators.required]],
      JobWork:["",[Validators.required]], Process:["",[Validators.required]], PartyName:["",[Validators.required]],
      WorkOrder:["",[Validators.required]], SlipNo:["",[Validators.required]],Date:["",[Validators.required]],OrderNumber:["",[Validators.required]],
      GatePass:["",[Validators.required]],
   })
   this. WareHouseNameLoad();

  }

  ngOnInit() {
  }
  ProcessChange()
  {
    console.log(this.Process.process)
    this.PartyNameLoad()
  }
  WhNameChange()
  {
    var req = {
      company: this.Company,
      statement: 'FeaturSettings',
     
    };
    this.commonprovider.GetWareHouseNameLoad(req).then((result) => {
      this.Featuresettings = result;
      console.log('Featuresettings ',  this.Featuresettings[0].jw );
      this.yarnseetings  = this.Featuresettings[0].jw 
      return true;
    });
  }
 
  Clear()
  {
 
    //  this.Warehouse="";
      this.supllier="";
      this.WorkOrder= "";
      this.OrderNumber = "";
      this.SlipNo= "";
      
     
  }
  JobWorks()
  {
   this. JwProcessNameLoad() ;
    console.log('jobwork',this.JobWork )
  }
  JwProcessNameLoad() {
   var req = {
     Company: this.Company,
     Process:this.JobWork,
     jobwork:"Fabric"
    
   };
   this.commonprovider.WsJWProcessNameLoad(req).then((result) => {
     this.ProcessName = result;
     console.log('Processname', this.ProcessName);
     return true;
   });
  }
  BACK()
  {
    this.router.navigate(['./home'])
  }
  WareHouseNameLoad() {
    var req = {
      company: this.Company,
      Branch_Name: this.Branch,
      statement: 'Receipt',
      UserName:this.UserName
    };
    this.commonprovider.GetWareHouseNameLoad(req).then((result) => {
      this.WH = result;
      console.log('WareHouseName', this.WH);
      return true;
    });
   }
   GatePassNumberLoad() {
    var req = {
      Company: this.Company,
      Years: this.year,
      Order_No:   this.ordr,
      Party_Name:   this.supllier,
      Workorderno: this.WorkOrder,
      };
    this.commonprovider.GetGatepassNo(req).then((result) => {
      this.GatepassNumLoad = result;
      console.log('GatepassNumLoad', this.GatepassNumLoad);
        return true;
    });
   
    if(this.yarnseetings == 'True' && this.GatepassNumLoad.length == '')
    {
      alert("Gate Pass Required")
    }
  }
   WorkOrderNumberLoad()  {
    var req = {
    Company: this.Company,
    statement: 'jwReceipt',
    Years: this.year,
    PartyCode:this.PartyCode,
    Supplier_Name:  this.supllier,
    process:this.Process.process
  };
  this.commonprovider.GetWorkOrderNumberLoad(req).then((result) => {
    var res: any;
    res = result;
    this.Workordr = res;
      this.Workordr = [];
      for (let index = 0; index < res.length; index++) {
      const element = res[index];
      let req_name = {
        id: index + 1,
        WorkOrder: element.WorkOrderNo,
         
      };
      this.Workordr.push(req_name);
    }
  console.log('RouteList',  this.Workordr);
  });
  }
  portChange(event: { component: IonicSelectableComponent; value: any }) {
    
    console.log('port:', event.value.PartyName);
    this.supllier = event.value.PartyName
    this.BuyerId = event.value.Buyer_id 
   
    this.PartyCode = event.value.PartyCode 
  this.WorkOrderNumberLoad();
  
  }
  WorkOrders(event: { component: IonicSelectableComponent; value: any }) {
      
    console.log('tttttt:', event.value.WorkOrder);
    this.WrkOrderNumber = event.value.WorkOrder
    this.  OrderNumberLoad()
    }
    portChangeOrdNo(event: { component: IonicSelectableComponent; value: any }) {
      console.log('port:', event.value.WorkOrder);
      this.ordr = event.value.Orde
      this.JqGatepassNo();
      }
    OrderNumberLoad()  {
  
      var req = {
      Company: this.Company,
      Branch_Name: this.Branch,
      statement: 'jwreceipt',
      Workorderno:this.WrkOrderNumber,
      Years: this.year,
      partyCode:this.PartyCode,
      process:this.Process.process
    };
    this.commonprovider.GetOrderNumberLoad(req).then((result) => {
      var res: any;
      res = result;
      this.Orde = res;
        this.Orde = [];
        for (let index = 0; index < res.length; index++) {
        const element = res[index];
        let req_name = {
          id: index + 1,
          Orde: element.Yarn_Po_No,
        };
        this.Orde.push(req_name);
      }
    console.log('RouteList',   this.Orde);
    
    });
  }
    PartyNameLoad() {
      var req = {
      Company: this.Company,
        process:this.Process.process,
      processNameload:"JWReceipt"
  
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
          Buyer_id:element.Buyer_Id
  
          };
        this.PartyNameIns.push(req_name);
      }
  console.log('PartyNames',  this.PartyNameIns);
    });
  }
  

  //JOBWORK RECEIPTT GRID -14.07.2023
  AddButoon() {
    // if(this.Warehouse == "" || this.Warehouse == undefined || this.Warehouse == null )
    // {
    //   this.commonprovider.FailedToast('Select Warehouse')
    // }
    // else
     if( this.PartyNamew == "" || this.PartyNamew == undefined || this.PartyNamew == null )
    {
      this.commonprovider.FailedToast('Select Partyname')
    }
    else if(this.WorkOrder == "" ||this.WorkOrder == undefined || this.WorkOrder == null )
    {
      this.commonprovider.FailedToast('Select Workorder')
    }
    else if( this.ordr== "" ||  this.ordr == undefined ||  this.ordr == null )
    {
      this.commonprovider.FailedToast('Select Order')
    }
    else if( this.SlipNo== "" ||  this.SlipNo == undefined ||  this.SlipNo == null )
    {
      this.commonprovider.FailedToast('Type Slip No  ')
    }
 
    else{
    var req = {
    Company: this.Company,
    wrkorder: this.WrkOrderNumber,
    partyname:this.PartyCode,
    process:this.Process.process,
    orderno: this.ordr,
    jobwork:this.JobWork,
    deliveryno:"",
    maingrid :"maingrid"

  };
  this.commonprovider.jobworkReceiptgrid(req).then((result) => {
    var res: any;
    res = result;
   this.jwreceipt = res;
console.log('GRIDDDD',  res);
  });
}
  }
JqGatepassNo() {
  var req = {
    company: this.Company,
    yr:this.year,
    orderno: this.ordr,
    partyname:this.supllier,
    
   
  };
  this.commonprovider.jobworkGatepass(req).then((result) => {
    this.Gatepass = result;
    
    return true;
  });
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
      localStorage.setItem('JwReceiptGrid',JSON.stringify (this.Selectedlistarr))
      localStorage.setItem('processname', this.Process.process)
      localStorage.setItem('wrkord',this.WrkOrderNumber)
      localStorage.setItem('PartyCode',this.PartyCode)
      localStorage.setItem('process',this.Process.process)
      localStorage.setItem('ordr', this.ordr)
      localStorage.setItem('JobWork',this.JobWork)
      localStorage.setItem('SilpNo',this.SlipNo)
      localStorage.setItem('Gatepass',this.Gatepass)
      localStorage.setItem
     this.router.navigate(['jwreceiptsave']) 
   
    }
   
  }
}
 

