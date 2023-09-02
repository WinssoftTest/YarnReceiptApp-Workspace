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
   
  companyArr: any;
  username: any;
  HomeForm: any;
  WarehouseNameArr: unknown;
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
      Number:['',Validators.required]
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
     this.YarnReceiptForm.reset();
     this.ordr = '';
     this.ReceiptGridDetailsLoad();
  }
  DateChange(event)
  {
    this.ReceiptGridDetailsLoad()
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


  onchangeDcNo()
  {
    console.log('DATEE',this.CurDate)
    this.ReceiptGridDetailsLoad() ;
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
    };
    this.commonprovider.WsYarnOpenFormGridLoad(req).then((result) => {
      var res: any;
      res = result;
      this.GridDetailsLoad = res;
      for(var i = 0 ; i < this.GridDetailsLoad.length;i++)
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
        this.Now_Received_Qty = this.GridDetailsLoad[i]['Now_Received_Qty'];
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
 

 

Edit() {
 this.user= "APP-USER"
  for (var i = 0; i < this.TotalPackList.length; i++) {
    this.TotalPackCurrentNo   =  this.TotalPackList[i].CurrentPackNO
    this.SinglePackWeight   =  this.TotalPackList[i].SingleCone
    this.PacktypeINT =  this.TotalPackList[i].PacktypeINT
    this.ConePerPack =  this.TotalPackList[i].NoConePack 
    this.TotalPack =  this.TotalPackList[i].TotalPack 
 console.log('PackListNO', this.TotalPackCurrentNo   )

  }
    for (var i = 0; i < this.Selectedlistarr.length ; i++) {
      console.log('RECEIVED',Number (this.Selectedlistarr[i].Received) - Number (this.Selectedlistarr[i].Now_Received_Qty) +   Number (this.NowreQty))

    
    this.PoNo = localStorage.getItem('PoNo');
    this.Wrk = localStorage.getItem('WrK');
    //  this.cone_wt = localStorage.getItem('Single')
    this.Count = localStorage.getItem('Count');
    this.CardNo = localStorage.getItem('CardNo');
    this.Unit = localStorage.getItem('Unit');
    this.Bags = localStorage.getItem('Bags');
    this.Balance = localStorage.getItem('Balance');
    this.NRCQty = localStorage.getItem('NRCQty');
    this.LotNum = localStorage.getItem('lot_no');
    this.WareHouse = localStorage.getItem('WareHouse');
    this.MillName = localStorage.getItem('MillName');
    this.Remark = localStorage.getItem('Remarks');
    this.Qty = localStorage.getItem('Qty');
    this.Lotno = localStorage.getItem('Lotno');
    this.wtpack = localStorage.getItem('wtpack');
    this.Cones = localStorage.getItem('Cones');
    this.Single = localStorage.getItem('Single');
    this.Pack = localStorage.getItem('Pack');
    this.Ordered = localStorage.getItem('Ordered');
    this.Conebag = localStorage.getItem('Conebag');
    this.Received = localStorage.getItem('Received');
    this.Cone_UOM = localStorage.getItem('Cone_UOM');
    this.Stock_Pur = localStorage.getItem('Stock_Pur');
    this.Y_REC_ID = localStorage.getItem('Y_Rec_ID');
    this.Y_Color_Allot_Id = localStorage.getItem('Y_Color_Allot_Id');
    this.Y_Color_Allot_Id_Pur = localStorage.getItem('Y_Color_Allot_Id_Pur');
    this.Y_Kora_Allot_Id = localStorage.getItem('Y_Kora_Allot_Id');
    this.Y_Kora_Allot_Id_Pur = localStorage.getItem('Y_Kora_Allot_Id_Pur');
    this.Y_Ord_Det_Id = localStorage.getItem('Y_Ord_Det_Id');
    this.Y_Ord_Id = localStorage.getItem('Y_Ord_Id');
    this.Y_PO_No = localStorage.getItem('Y_PO_No');
    this.Y_Rec_Det_Id = localStorage.getItem('Y_Rec_Det_Id');
    this.Cone_wt = localStorage.getItem('cone_wt');
    this.CardNo = localStorage.getItem('CardNo');
    this.Color = localStorage.getItem('Color');
    this.MillName = localStorage.getItem('MillName');
    this.Bag_UOM = localStorage.getItem('Bag_UOM');
    this.Ex_Per = localStorage.getItem('Ex_Per');
    this.y_ret_id = localStorage.getItem('y_ret_id');
    this.y_ret_det_id = localStorage.getItem('y_ret_det_id');
    this.Rec_Rate = localStorage.getItem('Rec_Rate');
    this.Rec_Amt = localStorage.getItem('Rec_Amt');
    this.Inspected_Qty = localStorage.getItem('Inspected_Qty');
    this.Insp_Comp_Status = localStorage.getItem('Insp_Comp_Status');
    this.Rec_No = localStorage.getItem('Y_Rec_No');
    var req = {
      Company: this.Company,
      years: this.year,
      y_Rec_No: this.Selectedlistarr[i].Y_Rec_No,
      Y_Rec_Date: this.CurDate,
      Yarn_Count:this.Selectedlistarr[i].Count,
      Nos: '5',
      Yarn_Po_No:  this.Selectedlistarr[i].Y_PO_No,
      Supplier_Name: this.supllier,
      Supplier_Code:  this.PartyCode,
      WorkOrderNo:this.Selectedlistarr[i].WorkOrderNo,
      Y_Po_No:this.Selectedlistarr[i].Y_PO_No ,
      Supplier_DC_No: this.DcNo,
      branch: this.Branch,
      Warehouse: "WS YARN WH",
      Supplier_DC_Date: this.CurDate,
      Color_Name:this.Selectedlistarr[i].Color,
      Mill_Name: this.Selectedlistarr[i].MillName,
      Ordered:this.Selectedlistarr[i].Ordered,
      Bag_UOM: this.Bag_UOM,
      Stock_Pur: this.Stock_Pur,
      Received:Number (this.Selectedlistarr[i].Received) - Number (this.Selectedlistarr[i].Now_Received_Qty) +   Number (this.NowreQty),
      NRCQty:this.NowreQty,
      NowRecQty:this.Selectedlistarr[i].Now_Received_Qty,
      Bags:  this.PacktypeINT,
      UOM: this.uom,
      GatePass_No:this.YarnReceiptForm.value.GatePass,
      Cones: this.Cones,
      Cone_UOM: this.Cone_UOM,
      Cone_Wt:   this.SinglePackWeight   ,
      Cones_Per_Bag:this.ConePerPack ,
      Bag_Wt:this.TotalPack ,
      Remarks: this.Remark,
      Ex_Per: this.Ex_Per,
      Y_Ord_Id: this.Y_Ord_Id,
      Y_Ord_Det_Id: this.Y_Ord_Det_Id,
      Y_Kora_Allot_Id: this.Y_Kora_Allot_Id,
      Y_Kora_Allot_Id_Pur: this.Y_Kora_Allot_Id_Pur,
      Y_Color_Allot_Id: this.Y_Color_Allot_Id,
      Y_Color_Allot_Id_Pur: this.Y_Color_Allot_Id_Pur,
      Y_Rec_Id: this.Selectedlistarr[i].Y_Rec_ID ,
      lot_no:   this.LotnoLoad,
      Rec_RetRec: '0',
      Pack_Type: '',
      Y_Ret_ID: this.Selectedlistarr[i].y_ret_id ,
      Y_Ret_No: '',
      Y_Ret_Det_ID: this.Selectedlistarr[i].y_ret_det_id
      ,
      Inspected_Qty: this.Inspected_Qty,
      Insp_Comp_Status: this.Insp_Comp_Status,
      Rec_Amt: this.Rec_Amt,
      Rec_Rate: this.Rec_Rate,
      Cone_wgt: '',
      Cones_Per_Pack: this.Cones,
      Pack_Wgt: this.wtpack,
      Y_Rec_Det_Id:  this.Selectedlistarr[i].Y_Rec_Det_Id,
    //  y_ret_id: this.PartyNameArr[0].y_ret_id,
      No_of_Packs: this.Pack,
      Single_Pack_Wt:   this.SinglePackWeight,
      Card_No: this.CardNo,
      Y_Rec_No: this.Selectedlistarr[i].Color ,
      Pack_No: '',
     
      Edit_User: this.UserName + "//" + this.user + "//" + this.Curdate1 ,
      Tot_Rec_Amt: '0',
    };
  }
    this.commonprovider.YarnReceiptEditLoad(req).then((result) => {
      this.save = result;
      console.log('Edit', this.save);
      for ( var i = 0 ; i < this.save.length ; i++ )
      {
       console.log('Saveyarnbagggggggg',this.save[i].Valid)
       this.SaveData = this.save[i].Valid
      }
      if( this.SaveData  == false)
      {
     this.commonprovider.presentToast('Edited Successfully');
    }
      else{
        this.commonprovider.FailedToast('Record Shard Cannot Edit')
       }
      
     
      return true;
    });
    this.WorkOrderNumberLoad();
  }
  Delete() {
    console.log('EDIT')

  //   for (var i = 0; i < this.TotalPackList.length; i++) {
  //     this.TotalPackCurrentNo   =  this.TotalPackList[i].CurrentPackNO
  //     this.SinglePackWeight   =  this.TotalPackList[i].SinglePackWt
  //     this.PacktypeINT =  this.TotalPackList[i].PacktypeINT
  //     this.ConePerPack =  this.TotalPackList[i].NoConePack 
  //     this.TotalPack =  this.TotalPackList[i].TotalPack 
  //  console.log('PackListNO', this.TotalPackCurrentNo   )
  
  //   }
      for (var i = 0; i < this.Selectedlistarr.length ; i++) {
       this.PoNo = localStorage.getItem('PoNo');
      this.Wrk = localStorage.getItem('WrK');
      this.Count = localStorage.getItem('Count');
      this.CardNo = localStorage.getItem('CardNo');
      this.Unit = localStorage.getItem('Unit');
      this.Bags = localStorage.getItem('Bags');
      this.Balance = localStorage.getItem('Balance');
      this.NRCQty = localStorage.getItem('NRCQty');
      this.LotNum = localStorage.getItem('lot_no');
      this.WareHouse = localStorage.getItem('WareHouse');
      this.MillName = localStorage.getItem('MillName');
      this.Remark = localStorage.getItem('Remarks');
      this.Qty = localStorage.getItem('Qty');
      this.Lotno = localStorage.getItem('Lotno');
      this.wtpack = localStorage.getItem('wtpack');
      this.Cones = localStorage.getItem('Cones');
      this.Single = localStorage.getItem('Single');
      this.Pack = localStorage.getItem('Pack');
      this.Ordered = localStorage.getItem('Ordered');
      this.Conebag = localStorage.getItem('Conebag');
      this.Received = localStorage.getItem('Received');
      this.Cone_UOM = localStorage.getItem('Cone_UOM');
      this.Stock_Pur = localStorage.getItem('Stock_Pur');
      this.Y_REC_ID = localStorage.getItem('Y_Rec_ID');
      this.Y_Color_Allot_Id = localStorage.getItem('Y_Color_Allot_Id');
      this.Y_Color_Allot_Id_Pur = localStorage.getItem('Y_Color_Allot_Id_Pur');
      this.Y_Kora_Allot_Id = localStorage.getItem('Y_Kora_Allot_Id');
      this.Y_Kora_Allot_Id_Pur = localStorage.getItem('Y_Kora_Allot_Id_Pur');
      this.Y_Ord_Det_Id = localStorage.getItem('Y_Ord_Det_Id');
      this.Y_Ord_Id = localStorage.getItem('Y_Ord_Id');
      this.Y_PO_No = localStorage.getItem('Y_PO_No');
      this.Y_Rec_Det_Id = localStorage.getItem('Y_Rec_Det_Id');
      this.Cone_wt = localStorage.getItem('cone_wt');
      this.CardNo = localStorage.getItem('CardNo');
      this.Color = localStorage.getItem('Color');
      this.MillName = localStorage.getItem('MillName');
      this.Bag_UOM = localStorage.getItem('Bag_UOM');
      this.Ex_Per = localStorage.getItem('Ex_Per');
      this.y_ret_id = localStorage.getItem('y_ret_id');
      this.y_ret_det_id = localStorage.getItem('y_ret_det_id');
      this.Rec_Rate = localStorage.getItem('Rec_Rate');
      this.Rec_Amt = localStorage.getItem('Rec_Amt');
      this.Inspected_Qty = localStorage.getItem('Inspected_Qty');
      this.Insp_Comp_Status = localStorage.getItem('Insp_Comp_Status');
      this.Rec_No = localStorage.getItem('Y_Rec_No');
      var req = {
        Company: this.Company,
        years: this.year,
        y_Rec_No:this.Selectedlistarr[i].Y_Rec_No ,
        Y_Rec_Date: this.CurDate,
        Yarn_Count:this.Selectedlistarr[i].Count,
        Nos: '5',
        Yarn_Po_No:  this.Selectedlistarr[i].Y_PO_No,
        Supplier_Name: this.supllier,
        Supplier_Code:  this.PartyCode,
        WorkOrderNo:this.Selectedlistarr[i].WorkOrderNo,
        Y_Po_No:this.Selectedlistarr[i].Y_PO_No ,
        Supplier_DC_No: this.DcNo,
        branch: this.Branch,
        Warehouse: "WS YARN WH",
        Supplier_DC_Date: this.CurDate,
        Color_Name:this.Selectedlistarr[i].Color,
        Mill_Name: this.Selectedlistarr[i].MillName,
        Ordered:this.Selectedlistarr[i].Ordered,
        Bag_UOM: this.Bag_UOM,
        Stock_Pur: this.Stock_Pur,
        Received:(Number(this.Selectedlistarr[i].Received ))+ Number (this.NowreQty),
        NRCQty:this.NowreQty,
        Bags:  this.PacktypeINT,
        UOM: this.uom,
        GatePass_No:this.YarnReceiptForm.value.GatePass,
        Cones: this.Cones,
        Cone_UOM: this.Cone_UOM,
        Cone_Wt: this.SingleConeWeight ,
        Cones_Per_Bag:this.ConePerPack ,
        Bag_Wt:this.TotalPack ,
        Remarks: this.Remark,
        Ex_Per: this.Ex_Per,
        Y_Ord_Id: this.Y_Ord_Id,
        Y_Ord_Det_Id: this.Y_Ord_Det_Id,
        Yarn_Kora_Allot_Id:this.Selectedlistarr[i].Y_Kora_Allot_Id  ,
        Yarn_Kora_Allot_Id_Pur: this.Selectedlistarr[i].Y_Kora_Allot_Id_Pur,
        Yarn_Color_Allot_Id: this.Selectedlistarr[i].Y_Color_Allot_Id  ,
        Yarn_Color_Allot_Id_Pur: this.Selectedlistarr[i].Y_Color_Allot_Id_Pur  ,
        Y_Rec_Id: this.Selectedlistarr[i].Y_Rec_ID ,
        lot_no:   this.LotnoLoad,
        Rec_RetRec: '0',
        Pack_Type: '',
        Y_Ret_ID: this.Selectedlistarr[i].y_ret_id ,
        Y_Ret_No: '',
        Y_Ret_Det_ID: this.Selectedlistarr[i].y_ret_det_id
        ,
        Inspected_Qty: this.Inspected_Qty,
        Insp_Comp_Status: this.Insp_Comp_Status,
        Rec_Amt: this.Rec_Amt,
        Rec_Rate: this.Rec_Rate,
        Cone_wgt: '',
        Cones_Per_Pack: this.Cones,
        Pack_Wgt: this.wtpack,
        Y_Rec_Det_Id:  this.Selectedlistarr[i].Y_Rec_Det_Id,
      //  y_ret_id: this.PartyNameArr[0].y_ret_id,
        No_of_Packs: this.Pack,
        Single_Pack_Wt:   this.SinglePackWeight,
        Card_No: this.CardNo,
        Y_Rec_No: this.Selectedlistarr[i].Y_Rec_No ,
        Pack_No: '',
    
        Edit_User: '//0007E9436187 /APP USER/ ADMIN - ADMIN/ 11/11/2022 16:22:53',
        Tot_Rec_Amt: '0',
      };
    }
      this.commonprovider.YarnReceiptDeleteLoad(req).then((result) => {
       var   res : any;
       res = result;
       console.log(res)
        if(res.Validd  ==  true)
        {
          this.commonprovider.presentToast("Deleted Successfully")
        }
         else{
          this.commonprovider.FailedToast('Record Shard Cannot Delete');
         }
         this.WorkOrderNumberLoad();
         this.ReceiptGridDetailsLoad();
         this.Selectedlistarr = [];
       return true;
      });
    
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
            this.Delete();
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
    this.ReceiptGridDetailsLoad();
 
  }
  portChange1(event: { component: IonicSelectableComponent; value: any }) {
    
    console.log('port:', event.value.WorkOrder);
    this.wrkord = event.value.WorkOrder
   this. OrderNumberLoad() ;
   this.ReceiptGridDetailsLoad();
  }
  portChangeOrdNo(event: { component: IonicSelectableComponent; value: any }) {
    
    console.log('port:', event.value.WorkOrder);
    this.ordr = event.value.Orde
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

  ngOnInit() {}
}
 
  
