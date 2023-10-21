import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../abi/common.service';
//import * as $ from 'jquery';
import { AlertController } from '@ionic/angular';
import { IonicSelectableComponent} from "ionic-selectable";
 
import { HttpClient, HttpParams } from "@angular/common/http";

import _ from "lodash";
import * as moment from 'moment';
 


class PartyName {
  public id: number;
  public PartyName:string;
}
class Workordr
{
  public id: number;
  public WorkOrder:string;
}
class Orde
{
  public id:number;
  public Orde:string;


}
@Component({
  selector: 'app-receipt-open-form',
  templateUrl: './receipt-open-form.page.html',
  styleUrls: ['./receipt-open-form.page.scss'],
})
export class ReceiptOpenFormPage implements OnInit {
  PartyName1: any;
  companyArr: any;
  username: any;
  HomeForm: any;
  WarehouseNameArr: unknown;
 type:any=[{id:1,typ:"Yarn"},{id:2,typ:"Weaving"},{id:1,typ:"Knitting"},{id:1,typ:"JobWork"},{id:1,typ:"Stores"},{id:1,typ:"Fabric"},{id:1,typ:"FG"}]
 // type:any=[{id:1,typ:"Yarn"}]
  Company = localStorage.getItem('Company');
  Branch = localStorage.getItem('Branch');
  year = localStorage.getItem('Year');
 // NOWREC= localStorage.getItem('NowQty');
  UserName = localStorage.getItem('User')
  Curdate1 = moment(new Date()).format('YYYY/MM/DD hh:mm:ss')
 
 
  WorkOrderNumberArr: unknown;
   WorkOrderNo: any;
  WorkOrder: any;
  YarnReceiptForm: any;
  GatepassNumLoad: unknown;
  OrderNumber: any;
  save: any;
  CurDate =  moment(new Date()).format('YYYY-MM-DD')
  DcNo: any;
  Warehouse: any;
  PoNo: string;
  Wrk: string;
  Count: string;
  CardNo: string;
  Unit: string;
  Balance: string;
  Bags: string;
  NRCQty: string;
  LotNum: string;
  WareHouse: string;
  MillName: string;
  Remark: string;
  Qty: string;
  Lotno: string;
  wtpack: string;
  Cones: string;
  Single: string;
  Pack: string;
  GridDetailsLoad: [];
  uom: never;
  lot_no: string;
  cone_wt: string;
  Y_Rec_ID: string;
  Y_Rec_Det_Id: string;
  Y_PO_No: string;
  Y_Ord_Id: string;
  Y_Ord_Det_Id: string;
  Y_Kora_Allot_Id_Pur: string;
  Y_Kora_Allot_Id: string;
  Y_Color_Allot_Id_Pur: string;
  Y_Color_Allot_Id: string;
  Stock_Pur: string;
  Received: string;
  Ordered: string;
  Ex_Per: string;
  Now_Received_Qty: string;
  Cones_Per_Bag: never;
  Cone_UOM: string;
  Color: string;
  Bag_Wt: never;
  Bag_UOM: string;
  Remarks: string;
  Conebag: string;
  y_ret_id: string;
  y_ret_det_id: string;
  Rec_Rate: string;
  Rec_Amt: string;
  Inspected_Qty: string;
  Insp_Comp_Status: string;
  Sno: number;
  Count1: string;
  display = '';
  displayStyle = 'none';
  Y_REC_ID: any;
  Cone_wt: string;
  Yarn_Kora_Allot_Id: string;
  count: any;
  checkboxes: any;
  Y_Rec_No: never;
  Rec_No: any;
  handlerMessage: string;
  PartyName: PartyName[];
  Workordr: Workordr[];
  Orde: Orde[];
  wrk: any;
  ordr: any;
  bal: never;
  wrkord: any;
  PartyCode: any;
  supllier: any;
  GatePass = '';
  Insp_Comp_Status1: never;
  Invoice_Comp: string;
  Bal: number;
  iq: number;
  BalL: never;
  Balancerec: never;
  NowreQty: string;
  NowQty: string;
  RECC: void;
  selectedArr: any;
  Selectedlistarr = [];
  Conebagg: string;
  Conewt: string;
  WsYarnY_REC_NOLoad;
  CurrentPackNo: string;
  maxDate: string;
  TotalPackList = [];
  TotalConelist=[];
  message: string;
  response: string;
  apiURL: any;
  asyncResult: any;
  TotalConeCurrentNo: any;
  TotalPackCurrentNo: any;
  Number:any
  clickCount: number = 0;
  ClickNumber: number;
  ClickNumbers = [{id : 1,}];
  arrayitem = [];
  ar1 :any
  ar2 : any
  id: any;
  LotnoLoad: string;
  SingleConeWeight: string;
  SinglePackWeight: any;
  PacktypeINT: any;
  ConePerPack: any;
  TotalPack: any;
 
  SaveData: any;
  user: string;
  Y_Rec_NO: any;
  Type:any;
  Date=moment(new Date()).format('YYYY-MM-DD');
  Date1 = moment(new Date()).format('YYYY-MM-DD');
  enableDisableRule(job) {}
  constructor(
    private commonprovider: CommonService,
    private _ho: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController,
    public httpClient: HttpClient,
    
  ) {
    this.YarnReceiptForm = this._ho.group({
      Date2: ['', [Validators.required]],
      Date:['',[Validators.required]],
      WorkOrder: ['', [Validators.required]],
      Date1: ['', [Validators.required]],
      OrderNumber: ['', [Validators.required]],
      CurDate: ['', [Validators.required]],
      DcNo: ['', [Validators.required]],
      PartyName: ['', [Validators.required]],
      Number:['',Validators.required],
      Type:['',Validators.required]
    });
    this.Count1 = localStorage.getItem('Count');
    
    console.log('Count', this.Count1);
    this.WareHouseNameLoad();
    this.PartyNameLoad();
    this.WorkOrderNumberLoad();
  

    this.count = 0;
    this.maxDate = moment(new Date()).format('YYYY-MM-DD')

    
  }
  // onchangeOrderNumber(event) {
  //   console.log('Order', this.OrderNumber);
  //   this.GatePassNumberLoad();
  // }
 
  Clear()
  {

     this.ReceiptGridDetailsLoad();
  }
  DateChange(event)
  {
    
  }
  WareHouseNameLoad() {
    var req = {
      company: this.Company,
      Branch_Name: this.Branch,
      statement: 'Receipt',
      UserName:this.UserName
    };
    this.commonprovider.GetWareHouseNameLoad(req).then((result) => {
      this.WarehouseNameArr = result;
      console.log('BranchName', this.WarehouseNameArr);
     
      return true;
    });
  
 
  }
 
  ionViewWillEnter() {
  this.NowreQty = localStorage.getItem('NowQty');
  this.Conebagg =  localStorage.getItem("Cones")
   this.Conewt = localStorage.getItem("wtpack");
   this.LotnoLoad = localStorage.getItem('LotnoLoad')
  this.SingleConeWeight = localStorage.getItem("SingleConeWeight")
  console.log('NOWREC',this.NowreQty);
    this.TotalPackList = JSON.parse(localStorage.getItem("Totalpacklist")); 
    this.TotalConelist =  JSON.parse(localStorage.getItem("TotalConelist")) 
    console.log("TotalPack", this.TotalPackList )
    console.log("TotalConelist ",this.TotalConelist  )
    console.log("gridlist",this.GridDetailsLoad)
    this.WareHouseNameLoad();
    this.PartyNameLoad();
    this.WorkOrderNumberLoad();
    for (var i = 0; i < this.TotalPackList.length; i++) {
       console.log('PackList', this.TotalPackList[i].CurrentPackNO)
    }
    for(var i = 0 ; i <  this.TotalConelist.length; i++)
    {
     this.TotalConeCurrentNo = this.TotalConelist[i].CurrentPackNO
     console.log('TotalpACKNO',this.TotalConelist[i].CurrentPackNO)
  } 
   
  }

  PartyNameLoad() {
      var req = {
      // Company: this.Company,
      // Branch_Name: this.Branch,
      // statement: 'Receipt',
      // Years: this.year,
      Company: this.Company,
      Years: this.year,
      Y_Rec_No:  this.ordr,
      WorkorderNo: this.wrkord,
      Date1:this.YarnReceiptForm.value.Date1,
      Date2:this.YarnReceiptForm.value.Date,
      Supplier : this.supllier,
      statement:this.YarnReceiptForm.value.Type,
      ownunit:"0",
      prodn:"0",
      process:"fabric"
    };
    this.commonprovider.ReceiptGridDetailsLoad(req).then((result) => {
      var res: any;
      res = result;
      this.PartyName = res;
        this.PartyName = [];
        for (let index = 0; index < res.length; index++) {
        const element = res[index];
        let req_name = {
          id: index + 1,
          PartyName: element.Supplier_Name,
          PartyCode: element.party_Code
          };
        this.PartyName.push(req_name);
      }
 console.log('RouteList',  this.PartyName);
    });
  }
  WorkOrderNumberLoad()  {
    var req = {
    Company: this.Company,
    Branch_Name: this.Branch,
    statement: 'Receipt',
    Years: this.year,
    Supplier_Name:  this.supllier
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
   
  OrderNumberLoad()  {
    console.log('Wrk',this.wrk)
    var req = {
    Company: this.Company,
    Branch_Name: this.Branch,
    statement: 'Receipt',
    Workorderno:this.wrkord,
    Years: this.year,
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
Clearbutton()
{
  this.PartyName1 = "";
  
  this.GridDetailsLoad = []
}

  onchangeDcNo()
  {
    console.log('DATEE',this.CurDate)
   // this.ReceiptGridDetailsLoad() ;
  }

 button()
 {
  var n =  this.Number
  this.ar1= (""+n).split("");
  var m = Number(this.Number) * 2 ;
  console.log('M',m)
  this.ar2= (""+m).split("");
  console.log('AR2', this.ar2)
  var uniqueUsersByID = _.uniqBy(this.ar2, "id");
  console.log('varrrr', uniqueUsersByID)
  let match = 0;
  for (let i=0; i<this.ar1.length; i++){
      for (let j=0; j<this.ar2.length; j++){ 
          if (this.ar1[i] === this.ar2[j]){ 
              match = 1;
             }
      }
      if (match === 1){
          match = 0
          console.log('+')
      }
      else{
          console.log('-')
      }
  }


 }

async  ReceiptGridDetailsLoad() {

  console.log('Gatepass',this.YarnReceiptForm.value.GatePass)
    var req = {
      Company: this.Company,
      Years: this.year,
      Y_Rec_No:  this.ordr,
      WorkorderNo: this.wrkord,
      Date1:this.YarnReceiptForm.value.Date1,
      Date2:this.YarnReceiptForm.value.Date,
      Supplier : this.supllier,
      statement:this.YarnReceiptForm.value.Type,
      ownunit:"0",
      prodn:"0",
      process:"fabric"
    };
    this.commonprovider.WsYarnOpenFormGridLoad(req).then((result) => {
      var res: any;
      res = result;
      this.GridDetailsLoad = res;
      this.PartyName = res;
     
      this.PartyName = [];
      const uniqueNames = new Set();
     
for (let index = 0; index < res.length; index++) {
  const element = res[index];
  const partyName = element.Supplier_Name;
  const WorkOrder = element.WorkOrderNo;
  // Check if the name is not already in the set before adding it
  if (!uniqueNames.has(partyName)) {
    let req_name = {
      id: index + 1,
      PartyName: partyName,
    };

    this.PartyName.push(req_name);
    uniqueNames.add(partyName);
  }
 
}
console.log('RouteList',  this.PartyName);
  });
    
  
   
  }
  onchangeDate(event) {
   // this.ReceiptGridDetailsLoad();
    this.  PartyNameLoad();
   
  }
 

 
  Add() {
    localStorage.setItem('BAL', this.Balancerec);
    console.log('Y_Rec_Det_Id',   this.Y_Rec_Det_Id)
    console.log('this.Ordered',    this.Ordered)
    this.router.navigate(['bagdetails']);
  
  }
  // Save1()
 
  // {
  //   console.log('It Work')
  // }
  View()
  {
     this.router.navigate(['receipt-open-form-edit']);
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header:  this.Y_Rec_NO + ' - '+ 'Do You Want Delete This Record ? ',
      buttons: [ 
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
            console.log('alert', this.handlerMessage);
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
        //    this.Delete();
            console.log('alert', this.handlerMessage);
          },
        },
      ],
    });
    await alert.present();
  }

  portChange(event: { component: IonicSelectableComponent; value: any }) {
    
    console.log('port:', event.value.PartyName);
    this.supllier = event.value.PartyName
    console.log('pARTCODE',event.value.PartyCode)
    this.PartyCode = event.value.PartyCode 
    this.WorkOrderNumberLoad();
   // this.ReceiptGridDetailsLoad();
 
  }
  portChange1(event: { component: IonicSelectableComponent; value: any }) {
    
    console.log('port:', event.value.WorkOrder);
    this.wrkord = event.value.WorkOrder
   this. OrderNumberLoad() ;
  // this.ReceiptGridDetailsLoad();
  }
  portChangeOrdNo(event: { component: IonicSelectableComponent; value: any }) {
    
    console.log('port:', event.value.WorkOrder);
    this.ordr = event.value.Orde
  //  this.ReceiptGridDetailsLoad();
  }
  
  itemClick(d, index) {
    
    this.Selectedlistarr = []
    console.log('Grid',this.GridDetailsLoad)
       var item = d.selected;
      if (item == true) {
        d["selected"] = false;
        this.selectedArr.splice(index, 1);
        this.selectedArr = [];
        console.log('Selected',this.selectedArr);
      } 
      else {
       d["selected"] = true;
        this.Selectedlistarr.push(d);
        console.log('selectttttttttttttttt',this.Selectedlistarr)
     }
    console.log("Grid6666", d);
    for(var i= 0; i< this.Selectedlistarr.length ;i++)
    {
      localStorage.setItem('SelectArray', JSON.stringify(this.Selectedlistarr))
   console.log('orderrrrrrrrrrrr',this.Selectedlistarr[i].Ordered)
   localStorage.setItem('Order',this.Selectedlistarr[i].Ordered)
   localStorage.setItem('Received',this.Selectedlistarr[i].Received)
   localStorage.setItem('Bal',this.Selectedlistarr[i].bal)
   localStorage.setItem('Ex_Per',this.Selectedlistarr[i].Ex_Per)
   localStorage.setItem('LotNo',this.Selectedlistarr[i].lot_no )
   localStorage.setItem('Cones',this.Selectedlistarr[i].Cones)
   localStorage.setItem('cone_wt',this.Selectedlistarr[i].cone_wt);
   localStorage.setItem('Y_Rec_Id',this.Selectedlistarr[i].Y_Rec_No )
   localStorage.setItem('Rate',this.Selectedlistarr[i].Rec_Rate ) 
   localStorage.setItem('Now_Received_Qty',this.Selectedlistarr[i].Now_Received_Qty ) 
   this.Y_Rec_NO = this.Selectedlistarr[i].Y_Rec_No 
 }
 this.router.navigate(['receipt-open-form-edit']);
}
typechange()
{
  
  console.log('1')
  console.log(this.YarnReceiptForm.value.Type)
  //this.ReceiptGridDetailsLoad()
}
  ngOnInit() {}
}

  
