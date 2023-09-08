import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../abi/common.service';
//import * as $ from 'jquery';
import { AlertController } from '@ionic/angular';
import { IonicSelectableComponent} from "ionic-selectable";
import { formatDate } from '@angular/common';
import { HttpClient, HttpParams } from "@angular/common/http";
import * as moment from 'moment';
import _ from "lodash";
 


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
  selector: 'app-yarnrecipt',
  templateUrl: './yarnrecipt.page.html',
  styleUrls: ['./yarnrecipt.page.scss'],
})

export class YarnreciptPage implements OnInit {
  public day = new Date().getDay()
  companyArr: any;
  username: any;
  HomeForm: any;
  WarehouseNameArr: unknown;
  Company = localStorage.getItem('Company');
  Branch = localStorage.getItem('Branch');
  year = localStorage.getItem('Year');
  NOWREC= localStorage.getItem('NowQty');
  UserName = localStorage.getItem('User')
 
  WorkOrderNumberArr: unknown;
   WorkOrderNo: any;
  WorkOrder: any;
  YarnReceiptForm: any;
  GatepassNumLoad: any=[];
  OrderNumber: any;
  save: any;
  CurDate =  moment(new Date()).format('YYYY-MM-DD')
  Curdate1 = moment(new Date()).format('YYYY/MM/DD hh:mm:ss')
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
  GridDetailsLoad = [];
  uom: any;
  clicked = false;
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
  Cones_Per_Bag: any;
  Cone_UOM: string;
  Color: string;
  Bag_Wt: any;
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
  Y_Rec_No: any;
  Rec_No: any;
  handlerMessage: string;
  PartyName: PartyName[];
  Workordr: Workordr[];
  Orde: Orde[];
  wrk: any;
  ordr: any;
  bal: any;
  wrkord: any;
  PartyCode: any;
  supllier: any;
  GatePass = '';
  Insp_Comp_Status1: any;
  Invoice_Comp: string;
  Bal: number;
  iq: number;
  BalL: never;
  Balancerec: any;
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
  Mid = 1;
  StockPur: number;
  EntryNo: any;
  WsYarnYRECNOLoad: any;
  CurrentRecNo: any;
  ConePerPacks: any;
  TotalPackCone: any;
  Single_Pack_Wt_Cone: any;
  BuyerId: any;
  valid: any;
  SaveUser: any;
  user: string;
  totalOverallweight: any;
  ConeNumbebr: string;
  WsYarnReceiptAdminApprovalload :any;
  PoAdminApproval: any;
  Featuresettings: unknown;
  yarnseetings: any;
 
  enableDisableRule(job) {}
  constructor(
    private commonprovider: CommonService,
    private _ho: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController,
    public httpClient: HttpClient
 
    
  ) {
    this.YarnReceiptForm = this._ho.group({
      Warehouse: ['', [Validators.required]],
      WorkOrder: ['', [Validators.required]],
      GatePass: ['', [Validators.required]],
      OrderNumber: ['', [Validators.required]],
      CurDate: ['', [Validators.required]],
      DcNo: ['', [Validators.required]],
      PartyName: ['', [Validators.required]],
      Number:['',Validators.required]
    });
    this.Count1 = localStorage.getItem('Count');
    console.log('Count', this.Count1);
    this.WareHouseNameLoad();
    this.PartyNameLoad();
    this.WorkOrderNumberLoad();
    this.YarnReceiptY_Rec_No() ;
   
    this.count = 0;
    this.maxDate = moment(new Date()).format('YYYY-MM-DD')
    console.log('Date',this.maxDate);
    localStorage.removeItem("NowQty")
  }
   openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
  Warehousechange(event)
  {
console.log('itwork',this.Warehouse) 
var req = {
  company: this.Company,
  statement: 'FeaturSettings',
 
};
this.commonprovider.GetWareHouseNameLoad(req).then((result) => {
  this.Featuresettings = result;
  console.log('Featuresettings ',  this.Featuresettings[0].yarn );
  this.yarnseetings  = this.Featuresettings[0].yarn 
  return true;
});

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
  YarnReceiptY_Rec_No() {
    var req = {
      Company: this.Company,
      branch:this.Branch,
      Years: this.year,
      statement: 'Receipt',
      warehouse_name:''
    };
    this.commonprovider.WsYarnY_REC_NOLoad(req).then((result) => {
      this.WsYarnY_REC_NOLoad = result;
     
      console.log('RECNO', this.WsYarnY_REC_NOLoad);
      return true;
    });
  }
  WsYarnReceiptAdminApproval() {
    var req = {
      Company: this.Company,
      Supplier:this.supllier,
      wrkNo:this.wrkord,
      yarnPoNo:this.ordr,
    };
    this.commonprovider.WsYarnReceiptAdminApproval(req).then((result) => {
      this.WsYarnReceiptAdminApprovalload = result;
       console.log('PoAdminAproval', this.WsYarnReceiptAdminApprovalload);
       for( var i  =  0 ; i <  this.WsYarnReceiptAdminApprovalload.length; i++)

       {
       this.PoAdminApproval =  this.WsYarnReceiptAdminApprovalload[i].Po_Admin_Approval
       console.log('uiu',this.PoAdminApproval)
       
       }   
      return true;
    });
  }
  ionViewWillEnter() {
  console.log(this.GridDetailsLoad)
 this.NowreQty  = localStorage.getItem('NowQty');
  this.Conebagg =  localStorage.getItem("Cones")
   this.Conewt = localStorage.getItem("wtpack");
   this.LotnoLoad = localStorage.getItem('LotnoLoad')
  this.SingleConeWeight = localStorage.getItem("SingleConeWeight")
  console.log('NOWREC',this.NowreQty);
    this.TotalPackList = JSON.parse(localStorage.getItem("Totalpacklist")); 
    this.TotalConelist =  JSON.parse(localStorage.getItem("TotalConelist")) ;
    this.totalOverallweight = localStorage.getItem('totalOverallweight')
    console.log("TotalPack", this.TotalPackList )
    console.log("TotalConelist ",this.TotalConelist  )
    this.WareHouseNameLoad();
    this.PartyNameLoad();
    this.WorkOrderNumberLoad();
    this.GateRECNOLOAD();
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
      Company: this.Company,
      Branch_Name: this.Branch,
      statement: 'Receipt',
      Years: this.year,
    };
    this.commonprovider.GetPartyNameLoad(req).then((result) => {
      var res: any;
      res = result;
      this.PartyName = res;
        this.PartyName = [];
        for (let index = 0; index < res.length; index++) {
        const element = res[index];
        let req_name = {
          id: index + 1,
          PartyName: element.Name,
          PartyCode: element.party_Code,
          Buyer_id:element.Buyer_Id

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
 
AddButoon()
{
  if(this.Warehouse == null ||  this.Warehouse == undefined)
  {
    this.commonprovider.FailedToast('Select Warehouse')
  } 
  else if( this.supllier == "" || this.supllier == undefined)
  {
    this.commonprovider.FailedToast('Select Supplier Name')
  } 
  else if(this.wrkord  == "" || this.wrkord  == undefined)
  {
    this.commonprovider.FailedToast('Select Work Order Number')
  } 
  else if( this.ordr == "" || this.ordr == undefined)
  {
    this.commonprovider.FailedToast('Select PO Number')
  } 
 
  else if(this.YarnReceiptForm.value.GatePass == "" || this.YarnReceiptForm.value.GatePass == undefined)
  {
    this.commonprovider.FailedToast('Gatepass No')
  } 
  else if( this.DcNo == "" || this.DcNo == undefined)
  {
    this.commonprovider.FailedToast('Type Dc No')
  } 
  else if( this.PoAdminApproval == "" || this.PoAdminApproval == undefined)
  {
    this.commonprovider.FailedToast('Get Order Approval')
  } 
  else 
  {
   this.ReceiptGridDetailsLoad() ;
  }
//   else
//   {
//  alert('Get Order Approval')
//   } 
}

  onchangeDcNo()
  {
    console.log('DATEE',this.CurDate)
    this.WsYarnReceiptAdminApproval();

 }
  GatePassNumberLoad() {
    var req = {
      Company: this.Company,
      Years: this.year,
      Order_No:   this.ordr,
      Party_Name:   this.supllier,
      Workorderno: this.WorkOrder,
      Y_Rec_Date: this.CurDate,
      statement: 'Receipt',
      Supplier_DC_No: this.DcNo,
      Supplier_DC_Date: this.CurDate,
       
    };
    this.commonprovider.GetGatepassNo(req).then((result) => {
      this.GatepassNumLoad = result;
      console.log('GatepassNumLoad', this.GatepassNumLoad);
        return true;
    });
    console.log('Warehouse', this.WareHouse);
    if(this.yarnseetings == 'True' && this.GatepassNumLoad.length == '')
    {
      alert("Gate Pass Required")
    }
  }
  GateRECNOLOAD() {
    var req = {
      Company: this.Company,
      years: this.year,
       };
    this.commonprovider.WsYarnReceiptBagDetailsEditLoad(req).then((result) => {
      this.WsYarnYRECNOLoad = result;
      console.log('YarnReceiptNumber', this.WsYarnYRECNOLoad);
   
    for(var i = 0 ; i < this.WsYarnYRECNOLoad.length; i++ )
    {
    console.log('Recccc',this.WsYarnYRECNOLoad[i]["entry_no"])
    this.CurrentRecNo = this.WsYarnYRECNOLoad[i]["entry_no"]
  }
  return true;
});
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


     var str = this.UserName + "//" + this.user + "//" + this.CurDate + "//";
     console.log(str)

  console.log('Gatepass',this.YarnReceiptForm.value.GatePass)
    var req = {
      Company: this.Company,
      Years: this.year,
      Y_Rec_No:  this.ordr,
      Workorderno: this.wrkord
    };
    this.commonprovider.ReceiptGridDetailsLoad(req).then((result) => {
      var res: any;
      res = result;
      this.GridDetailsLoad = res;
      for(var i = 0 ; i< this.GridDetailsLoad.length;i++)
      {
        this.GridDetailsLoad[i]['BAL'];
        console.log('Bal', this.GridDetailsLoad[i]['Bal']);
      }
       for (var i = 0; i < this.GridDetailsLoad.length; i++) {
        console.log('Ordered', this.GridDetailsLoad.length['Ordered']);
        console.log('Bal', this.GridDetailsLoad[i]['Bal']);
         this.Balancerec = this.GridDetailsLoad[i]['Bal']
        this.Sno = i;
        this.Invoice_Comp = this.GridDetailsLoad[i]['Invoice_Comp_Status']
        this.Bag_UOM = this.GridDetailsLoad[i]['Bag_UOM'];
        this.Bag_Wt = this.GridDetailsLoad[i]['Bag_Wt'];
        this.CardNo = this.GridDetailsLoad[i]['Bags'];
        this.Bags = this.GridDetailsLoad[i]['Bags'];
        this.Color = this.GridDetailsLoad[i]['Color'];
        this.Cone_UOM = this.GridDetailsLoad[i]['Cone_UOM'];
        this.Cones_Per_Bag = this.GridDetailsLoad[i]['Cones_Per_Bag'];
        this.Now_Received_Qty = localStorage.getItem("NowQty");
        this.Ex_Per = this.GridDetailsLoad[i]['Ex_Per'];
        this.Lotno = this.GridDetailsLoad[i]['LotNo'];
        this.MillName = this.GridDetailsLoad[i]['MillName'];
        this.Ordered = this.GridDetailsLoad[i]['Ordered'];
        this.Received = this.GridDetailsLoad[i]['Received'];
        this.Stock_Pur = this.GridDetailsLoad[i]['Stock_Pur'];
        this.Unit = this.GridDetailsLoad[i]['Unit'];
        this.Ex_Per = this.GridDetailsLoad[i]['Ex_Per'];
        this.bal = this.GridDetailsLoad[i]['bal'];
        // this.WareHouse
        // =this.GridDetailsLoad[i]["WareHouse"]
        this.WorkOrderNo = this.GridDetailsLoad[i]['WorkOrderNo'];
        this.Y_Color_Allot_Id = this.GridDetailsLoad[i]['Y_Color_Allot_Id'];
        this.Y_Color_Allot_Id_Pur =
          this.GridDetailsLoad[i]['Y_Color_Allot_Id_Pur'];
        this.Y_Kora_Allot_Id = this.GridDetailsLoad[i]['Y_Kora_Allot_Id'];
        this.Y_Kora_Allot_Id_Pur =
          this.GridDetailsLoad[i]['Y_Kora_Allot_Id_Pur'];
        this.Y_Ord_Det_Id = this.GridDetailsLoad[i]['Y_Ord_Det_Id'];
        this.Y_Ord_Id = this.GridDetailsLoad[i]['Y_Ord_Id'];
        this.Y_PO_No = this.GridDetailsLoad[i]['Y_PO_No'];
        this.Y_Rec_Det_Id = this.GridDetailsLoad[i]['Y_Rec_Det_Id'];
        this.Y_Rec_ID = this.GridDetailsLoad[i]['Y_Rec_ID'];
        this.cone_wt = this.GridDetailsLoad[i]['cone_wt'];
        this.lot_no = this.GridDetailsLoad[i]['lot_no'];
        this.uom = this.GridDetailsLoad[i]['uom'];
        this.Remarks = this.GridDetailsLoad[i]['Remarks'];
        this.y_ret_id = this.GridDetailsLoad[i]['y_ret_id'];
        this.y_ret_det_id = this.GridDetailsLoad[i]['y_ret_det_id'];
        this.Rec_Rate = this.GridDetailsLoad[i]['Rec_Rate'];
        this.Rec_Amt = this.GridDetailsLoad[i]['Rec_Amt'];
        this.Inspected_Qty = this.GridDetailsLoad[i]['Inspected_Qty'];
         this.Yarn_Kora_Allot_Id = this.GridDetailsLoad[i]['Y_Kora_Allot_Id'];
        this.Y_Kora_Allot_Id_Pur =
          this.GridDetailsLoad[i]['Y_Kora_Allot_Id_Pur'];
        this.Y_Color_Allot_Id = this.GridDetailsLoad[i]['Y_Color_Allot_Id'];
        this.Y_Color_Allot_Id_Pur =
          this.GridDetailsLoad[i]['Y_Color_Allot_Id_Pur'];
        this.Y_Rec_No = this.GridDetailsLoad[i]['Y_Rec_No'];
         
        this.Insp_Comp_Status1 = this.GridDetailsLoad[i]['Invoice_Comp_Status'];

        if(this.Insp_Comp_Status1 == "False")
        {
          this.Insp_Comp_Status = '0';
        }
        else
        {
          this.Insp_Comp_Status = '1';
        }
        console.log('Comp',this.Insp_Comp_Status);
        localStorage.setItem('WrK', this.WorkOrderNo);
        localStorage.setItem('Count', this.Count);
        localStorage.setItem('CardNo', this.CardNo);
        localStorage.setItem('Unit', this.Unit);
        localStorage.setItem('Bags', this.Bags);
        // localStorage.setItem('Balance'this.Bal );
        localStorage.setItem('NRCQty', this.Now_Received_Qty);
        localStorage.setItem('Received', this.Received);
        localStorage.setItem('Stock_Pur', this.Stock_Pur);
        localStorage.setItem('Y_Color_Allot_Id', this.Y_Color_Allot_Id);
        localStorage.setItem('Y_Color_Allot_Id_Pur', this.Y_Color_Allot_Id_Pur);
        localStorage.setItem('Y_Kora_Allot_Id', this.Y_Kora_Allot_Id);
        localStorage.setItem('Y_Kora_Allot_Id_Pur', this.Y_Kora_Allot_Id_Pur);
        localStorage.setItem('Y_Ord_Det_Id', this.Y_Ord_Det_Id);
        localStorage.setItem('Y_Ord_Id', this.Y_Ord_Id);
        localStorage.setItem('Y_PO', this.Y_PO_No);
        localStorage.setItem('Y_Rec_Det_Id', this.Y_Rec_Det_Id);
        localStorage.setItem('Y_Rec_ID', this.Y_Rec_ID);
        localStorage.setItem('cone_wt', this.cone_wt);
        localStorage.setItem('lot_no', this.lot_no);
        localStorage.setItem('uom', this.uom);
        localStorage.setItem('WareHouse', this.WareHouse);
        localStorage.setItem('Ordered ', this.Ordered);
        localStorage.setItem('MillName ', this.MillName);
        localStorage.setItem('Remarks ', this.Remarks);
        localStorage.setItem('Conebag', this.Cones_Per_Bag);
        localStorage.setItem('Ex_Per', this.Ex_Per);
        localStorage.setItem('bal',this.bal)
        localStorage.setItem('LotnoLoad', this.Lotno);
        localStorage.setItem('Cone_UOM', this.Cone_UOM);
        localStorage.setItem('CardNo', this.CardNo);
        localStorage.setItem('Color', this.Color);
        localStorage.setItem('MillName', this.MillName);
        localStorage.setItem('Bag_UOM', this.Bag_UOM);
        localStorage.setItem('Ordered', this.Ordered);
        localStorage.setItem('y_ret_id', this.y_ret_id);
        localStorage.setItem('y_ret_det_id', this.y_ret_det_id);
        localStorage.setItem('Rec_Rate', this.Rec_Rate);
        localStorage.setItem('Rec_Amt', this.Rec_Amt);
        localStorage.setItem('Inspected_Qty', this.Inspected_Qty);
        localStorage.setItem('Insp_Comp_Status', this.Insp_Comp_Status);
        localStorage.setItem('Yarn_Kora_Allot_Id', this.Yarn_Kora_Allot_Id);
        localStorage.setItem('Y_Kora_Allot_Id_Pur', this.Y_Kora_Allot_Id_Pur);
        localStorage.setItem('Y_Color_Allot_Id', this.Y_Color_Allot_Id);
        localStorage.setItem('Y_Color_Allot_Id_Pur', this.Y_Color_Allot_Id_Pur);
        localStorage.setItem('Y_Rec_No', this.Y_Rec_No);
        localStorage.setItem('Invoice_Comp',  this.Invoice_Comp )
      }
      console.log('GridDetailsLoad', this.GridDetailsLoad);
      console.log('pooooo', this.Y_PO_No )
      console.log('RECNOOOOOOOOO',   this.Y_Rec_ID);
      console.log('ORDIDDDDDDDD',   this.Y_Ord_Id);
      console.log('Y_Kora_Allot_Id_Pur',   this.Y_Kora_Allot_Id_Pur);
 
      return true;
    });
 
  }
  onchangeDate(event) {
    this.ReceiptGridDetailsLoad();
    console.log('pooooo', this.Y_PO_No )
  }
  onchangeGatePass()
  {
    console.log('IT',this.GatePass)
    console.log('Gatepassno',this.YarnReceiptForm.value.GatePass )
 
  }
async yarnReciptBagDetailSave()
 {
  for(var i = 0 ; i<  this.TotalConelist.length; i++)
  {
   this.TotalConeCurrentNo = this.TotalConelist[i].CurrentPackNO
   this.SinglePackWeight   = this.TotalConelist[i].SinglePackWt
   this.PacktypeINT = this.TotalConelist[i].PacktypeINT
   this.ConePerPack =  this.TotalConelist[i].NoConePack 
   this.TotalPack =  this.TotalConelist[i].TotalPack 
    console.log('TotalpACKNO',this.TotalConelist[i].CurrentPackNO)
} 
    for (var i = 0; i < this.Selectedlistarr.length; i++) {
     {
    var req = {
      Mid:this.Mid,
      Company: this.Company,
      years: this.year,
      y_Rec_No: this.Selectedlistarr[i].Y_Rec_No,
      Y_Rec_Date: this.CurDate,
      Yarn_Count: this.Selectedlistarr[i].Count,
      Nos: '',
      EntryNo:  this.CurrentRecNo ,
      Yarn_Po_No: this.Selectedlistarr[i].Y_PO_No ,
      Supplier_Name:   this.supllier,
      Supplier_Code: this.PartyCode,
      WorkOrderNo:this.Selectedlistarr[i].WorkOrderNo,
      Y_Po_No:this.Selectedlistarr[i].Y_PO_No,
      Supplier_DC_No: this.DcNo,
      branch: this.Branch,
      warehouse_name: this.Warehouse,
      Insp_Comp_Status:'0',
      Supplier_DC_Date: this.CurDate,
      Color_Name:this.Selectedlistarr[i].Color,
      Mill_Name:this.Selectedlistarr[i].MillName,
      Ordered: this.Ordered,
      Bag_UOM: this.Bag_UOM,
      Stock_Pur: this.Stock_Pur,
      Received: Number (this.Now_Received_Qty )+ Number ( this.totalOverallweight ),
      Now_Received_Qty: this.totalOverallweight ,
      Bags: '1',
      UOM: this.uom,
      Cones: this.Cones,
      Cone_UOM: this.Cone_UOM,
      Cone_Wt: this.SingleConeWeight ,
      Cones_Per_Bag:  this.ConePerPack  ,
      Bag_Wt:this.TotalPack ,
      Remarks: this.Remark,
      Ex_Per: this.Ex_Per,
      Y_Ord_Id: this.Y_Ord_Id,
      Y_Ord_Det_Id: this.Selectedlistarr[i].Y_Ord_Det_Id,
      Y_Kora_Allot_Id: this.Y_Kora_Allot_Id,
      Y_Kora_Allot_Id_Pur:  this.Selectedlistarr[i].Y_Kora_Allot_Id_Pur,
      Y_Color_Allot_Id: this.Y_Color_Allot_Id,
      Y_Color_Allot_Id_Pur: this.Y_Color_Allot_Id_Pur,
      Y_Rec_Id: this.Y_REC_ID,
      lot_no:    this.LotnoLoad ,
      Rec_RetRec: '0',
      Pack_Type: 'Cone',
      pack_type:'Cone',
      Y_Ret_ID:0,
      Y_Ret_No: '',
      Y_Ret_Det_ID: 0,
      Inspected_Qty:'0',
      Invoice_Comp_Status: '0' ,
      Rec_Amt: '0',
      Rec_Rate: '0',
      GatePass_No:this.YarnReceiptForm.value.GatePass,
      Cone_wgt: '',
      Cones_Per_Pack:  this.ConePerPack ,
      Pack_Wgt: this.wtpack,
   //   Y_Rec_Det_Id: this.Y_Rec_Det_Id,
    //  y_ret_id: this.PartyNameArr[0].y_ret_id,
      No_of_Packs:'1',
      Single_Pack_Wt: this.SinglePackWeight,
      Card_No: this.CardNo,
      Y_Rec_No: this.OrderNumber,
      Pack_No: '0',
      Save_User: '//0007E9436187 /APP USER/ ADMIN - ADMIN/ 11/11/2022 16:22:53',
      Edit_User: '//0007E9436187 /APP USER/ ADMIN - ADMIN/ 11/11/2022 16:22:53',
      Tot_Rec_Amt: '100',
      RecQty:Number( this.Received ) + Number( this.totalOverallweight ),
      CurrentNo:this.TotalConeCurrentNo
    };
  }
    this.commonprovider.WsReceiptYarnBagDetailsSaveLoad(req).then((result) => {
      this.save = result;
      console.log('Saveedata',this.save);
      this.commonprovider.presentToast('Saved Successfully');
 
      return true;
    });
  
 
    }
   
}
 

async  Save() {
this.GateRECNOLOAD();
if(this.LotnoLoad == '' || this.LotnoLoad == null || this.LotnoLoad == undefined || this.LotnoLoad == '0')
{
  alert('Fill the BagDetails Page Details')
}
else
{
this.user= "APP-USER";
this.ConeNumbebr = localStorage.getItem('ConeNumber')
  for (var i = 0; i < this.TotalPackList.length; i++) {
     this.TotalPackCurrentNo   =  this.TotalPackList[i].CurrentPackNO
     this.SinglePackWeight   =  this.TotalPackList[i].SinglePackWt
     this.PacktypeINT =  this.TotalPackList[i].PacktypeINT
     this.ConePerPack =  this.TotalPackList[i].NoConePack 
     this.TotalPack =  this.TotalPackList[i].TotalPack 
  console.log('PackListNO', this.TotalPackCurrentNo   )
 }
 for(var i = 0 ; i<  this.TotalConelist.length; i++)
 {
  this.TotalConeCurrentNo = this.TotalConelist[i].CurrentPackNO
  this. Single_Pack_Wt_Cone   = this.TotalConelist[i].SinglePackWt
  this.PacktypeINT = this.TotalConelist[i].PacktypeINT
  this.ConePerPacks =  this.TotalConelist[i].NoConePack 
  this.TotalPackCone =  this.TotalConelist[i].TotalPack 
   console.log('TotalpACKNO',this.TotalConelist[i].CurrentPackNO)
} 
 for (var i = 0; i < this.Selectedlistarr.length; i++) {
 if(this.Selectedlistarr[i].Stock_Pur == 'True')
 {
this.StockPur = 1
 }
 else{
  this.StockPur = 0
 }
    var req = {
      EntryNo:  this.CurrentRecNo ,
      Company: this.Company,
      years: this.year,
      Mid:'0',
      ConePackNumber:this.ConeNumbebr,
      y_Rec_No: this.Selectedlistarr[i].Y_Rec_No,
      Y_Rec_Date: this.CurDate,
      Yarn_Count: this.Selectedlistarr[i].Count,
      Nos: '',
      Yarn_Po_No: this.Selectedlistarr[i].Y_PO_No ,
      Supplier_Name:   this.supllier,
      Supplier_Code: this.PartyCode,
      WorkOrderNo:this.Selectedlistarr[i].WorkOrderNo,
      Y_Po_No:this.Selectedlistarr[i].Y_PO_No,
      Supplier_DC_No: this.DcNo,
      branch: this.Branch,
      warehouse_name:this.Warehouse,
      Insp_Comp_Status:'0',
      Supplier_DC_Date: this.CurDate,
      Color_Name:this.Selectedlistarr[i].Color,
      Mill_Name:this.Selectedlistarr[i].MillName,
      Ordered: this.Selectedlistarr[i].Ordered,
      Bag_UOM:'Bag',
      Stock_Pur:this.StockPur ,
      Received:Number (this.Selectedlistarr[i].Received ) + Number ( this.totalOverallweight ),
      Now_Received_Qty: this.totalOverallweight ,
      Bags:   this.PacktypeINT,
      UOM: this.uom,
      Cones: this.ConePerPacks,
      Cone_UOM:'Cone',
      Cone_Wt: this.SingleConeWeight ,
      Cones_Per_Bag: this.ConePerPack  ,
      Cones_Per_Bags:this.ConePerPacks ,
      Bag_Wt:this.TotalPack ,
      Bag_WtCone: this.TotalPackCone,
      Remarks: this.Remark,
      Ex_Per: this.Selectedlistarr[i].Ex_Per,
      Y_Ord_Id: this.Y_Ord_Id,
      Y_Ord_Det_Id: this.Selectedlistarr[i].Y_Ord_Det_Id,
      Y_Kora_Allot_Id: this.Y_Kora_Allot_Id,
      Y_Kora_Allot_Id_Pur:  this.Selectedlistarr[i].Y_Kora_Allot_Id_Pur,
      Y_Color_Allot_Id: this.Y_Color_Allot_Id,
      Y_Color_Allot_Id_Pur: this.Y_Color_Allot_Id_Pur,
      Y_Rec_Id: this.Y_REC_ID,
      lot_no:    this.LotnoLoad,
      Rec_RetRec: '0',
      Pack_Type: 'Bag',
      pack_type:'Bag',
      Y_Ret_ID:0,
      Y_Ret_No: '',
      Inspected_Qty:'0',
      Invoice_Comp_Status: '0' ,
      Rec_Amt: this.Selectedlistarr[i].Rec_Rate  * Number( this.totalOverallweight ),
      Rec_Rate:this.Selectedlistarr[i].Rec_Rate,
      GatePass_No:this.YarnReceiptForm.value.GatePass,
      Cone_wgt: '',
      Cones_Per_Pack: this.ConePerPack ,
      Pack_Wgt: this.wtpack,
    //  Y_Rec_Det_Id: this.Y_Rec_Det_Id,
    //  y_ret_id: this.PartyNameArr[0].y_ret_id,
      No_of_Packs:this.PacktypeINT ,
      Single_Pack_Wt:   this.SinglePackWeight,
      Single_Pack_Wt_Cone:   this.Single_Pack_Wt_Cone,
      Card_No:this.Selectedlistarr[i].CardNo,
      Y_Rec_No: this.OrderNumber,
      Pack_No: '0',
      Save_User:this.UserName + "//" + this.user + "//" + this.Curdate1 ,
    //  Edit_User: '//0007E9436187 /APP USER/ ADMIN - ADMIN/ 11/11/2022 16:22:53',
      Tot_Rec_Amt: this.Selectedlistarr[i].Rec_Rate  * Number( this.totalOverallweight ),
      RecQty:Number(this.Selectedlistarr[i].Received ) + Number( this.totalOverallweight ),
      CurrentNo:this.TotalPackList[i].CurrentPackNO,
      CurrentNoCone:  this.TotalConeCurrentNo, 
      pack_typeCone : 'Cones',
      Sup_Id:this.BuyerId,
      BagsCone:'1',
      MobileEntry:'1',
    };
   this.commonprovider.YarnReceiptSave(req).then((result) => {
    var res:any;
    res = result;
 
      console.log(res.Valid)
       for (var i = 0; i < res.length; i ++ )
       {
        this.valid = res[i].Valid
       }
      if( this.valid  == true)
      {
     this.commonprovider.presentToast('Saved Successfully');
     this.ReceiptGridDetailsLoad() ;
    }
      else{
        this.commonprovider.FailedToast('Record Not Saved')
       }
       this.valid ="";
 });

   }
 
  //  this.id=1;
  //   this.asyncResult = await ("id = 1");
  //  console.log('sdsoidsoio',this.asyncResult)
  //  console.log(this.asyncResult);
  //  this.id = '';
  //  this.yarnReciptBagDetailSave();
   return true;
}
 
}

 
  
  Add() {
    localStorage.setItem('BAL', this.Balancerec);
    console.log('Y_Rec_Det_Id',   this.Y_Rec_Det_Id)
    console.log('this.Ordered',    this.Ordered)
    this.router.navigate(['bagdetails']);
  
  }
   
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
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
          
            this.handlerMessage = 'Alert confirm';
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
    this.BuyerId = event.value.Buyer_id 
    console.log('pARTCODE',event.value.PartyCode)
    this.PartyCode = event.value.PartyCode 
    this.WorkOrderNumberLoad();
 
  }
  portChange1(event: { component: IonicSelectableComponent; value: any }) {
    
    console.log('port:', event.value.WorkOrder);
    this.wrkord = event.value.WorkOrder
   this. OrderNumberLoad() 
  }
  portChangeOrdNo(event: { component: IonicSelectableComponent; value: any }) {
    
    console.log('port:', event.value.WorkOrder);
    this.ordr = event.value.Orde
    this.GatePassNumberLoad();
   
  }
  Clear()
  {
     this.YarnReceiptForm.reset();
     this.ordr = '';
     this.ReceiptGridDetailsLoad();
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
     console.log('selectttttttttttttttt',this.Selectedlistarr)
    for(var i= 0; i< this.Selectedlistarr.length ;i++)
    {
   console.log('orderrrrrrrrrrrr',this.Selectedlistarr[i].Ordered)
   localStorage.setItem('Order',this.Selectedlistarr[i].Ordered)
   localStorage.setItem('Received',this.Selectedlistarr[i].Received)
   localStorage.setItem('Bal',this.Selectedlistarr[i].bal)
   localStorage.setItem('Ex_Per',this.Selectedlistarr[i].Ex_Per)
   //localStorage.setItem('LotNo',this.Selectedlistarr[i].lot_no )
   localStorage.setItem('Cones',this.Selectedlistarr[i].Cones_Per_Bag )
   localStorage.setItem('cone_wt',this.Selectedlistarr[i].cone_wt);
   localStorage.setItem('Y_Rec_Id',this.Selectedlistarr[i].Y_Rec_Id)
   localStorage.setItem('Rate',this.Selectedlistarr[i].Rec_Rate ) 
   localStorage.setItem('Bag_Wt',this.Selectedlistarr[i].Bag_Wt) 
   localStorage.setItem('Count',this.Selectedlistarr[i].Count ) 
   localStorage.setItem('Color',this.Selectedlistarr[i].Color
   )
 }
   this.router.navigate(['bagdetails']);
}

  ngOnInit() {}
}
 
  