import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { CommonService } from '../abi/common.service';

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
  selector: 'app-returnreceipt',
  templateUrl: './returnreceipt.page.html',
  styleUrls: ['./returnreceipt.page.scss'],
})
export class ReturnreceiptPage implements OnInit {


  companyArr: any;
  username: any;
  HomeForm: any;
  WarehouseNameArr: unknown;
  Company = localStorage.getItem('Company');
  Branch = localStorage.getItem('Branch');
  year = localStorage.getItem('Year');
  WorkOrderNumberArr: unknown;
   WorkOrderNo: any;
  WorkOrder: any;
  YarnReceiptForm: any;
  GatepassNumLoad: unknown;
  OrderNumber: any;
  save: unknown;
  CurDate: any;
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
  Now_Received_Qty: never;
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
  YarnReturnReceiptForm: any;
  party: any;

  enableDisableRule(job) {}
  constructor(
    private commonprovider: CommonService,
    private _Re: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController
  ) {
    this.YarnReturnReceiptForm = this._Re.group({
      Warehouse: ['', [Validators.required]],
      WorkOrder: ['', [Validators.required]],
      GatePass: ['', [Validators.required]],
      OrderNumber: ['', [Validators.required]],
      CurDate: ['', [Validators.required]],
      DcNo: ['', [Validators.required]],
      PartyName: ['', [Validators.required]],
    });
    this.Count1 = localStorage.getItem('Count');
    console.log('Count', this.Count1);
    this.WareHouseNameLoad();
    this.PartyNameLoad();
  //  this.WorkOrderNumberLoad();
    this.count = 0;
  }
  // onchangeOrderNumber(event) {
  //   console.log('Order', this.OrderNumber);
  //   this.GatePassNumberLoad();
  // }
  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
  WareHouseNameLoad() {
    var req = {
      company: this.Company,
      Branch_Name: this.Branch,
      statement1: 'ReturnReceipt',
    };
    this.commonprovider.GetWareHouseNameLoad(req).then((result) => {
      this.WarehouseNameArr = result;
      console.log('BranchName', this.WarehouseNameArr);
      return true;
    });
  }
  // onchangeWorkorder(event) {
  //   console.log('wrk', this.WorkOrder);
  //   this.OrderNumberLoad();
  //   console.log('Warehouse', this.Warehouse);
  // }
  PartyNameLoad() {
      var req = {
      Company: this.Company,
      Branch_Name: this.Branch,
      statement: 'ReturnReceipt',
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
    statement: 'ReturnReceipt',
    Supplier_name:this.party,
    Years: this.year,
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
  // WorkOrderNumberLoad() {
  //   var req = {
  //     Company: this.Company,
  //     Years: '22-23',
  //     statement: 'Receipt',
  //   };
  //   this.commonprovider.GetWorkOrderNumberLoad(req).then((result) => {
  //     this.WorkOrderNumberArr = result;
  //     console.log('WorkOrderNumber', this.WorkOrderNumberArr);
  //     return true;
  //   });
  // }
  // PartyNameLoad() {
  //   var req = {
  //     Company: this.Company,
  //     Branch_Name: this.Branch,
  //     statement: 'Receipt',
  //     Years: this.year,
  //   };
  //   this.commonprovider.GetPartyNameLoad(req).then((result) => {
  //     this.PartyNameArr = result;
  //     console.log('PartyNameArr', this.PartyNameArr);
  //     console.log(this.PartyNameArr[0].Buyer_Id);
  //     return true;
  //   });
  // }
  // WorkOrderNumberLoad() {
  //   var req = {
  //     Company: this.Company,
  //     Years: '22-23',
  //     statement: 'Receipt',
  //   };
  //   this.commonprovider.GetWorkOrderNumberLoad(req).then((result) => {
  //     this.WorkOrderNumberArr = result;
  //     console.log('WorkOrderNumber', this.WorkOrderNumberArr);
  //     return true;
  //   });
  // }
  OrderNumberLoad()  {
    var req = {
    Company: this.Company,
    Branch_Name: this.Branch,
    statement: 'Receipt',
    Workorderno: this.wrk,
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
  // OrderNumberLoad() {
  //   var req = {
  //     Company: this.Company,
  //     Years: this.year,
  //     Supplier: '',
  //     Workorderno: this.WorkOrder,
  //   };
  //   this.commonprovider.GetOrderNumberLoad(req).then((result) => {
  //     this.OrderNumberArr = result;
  //     console.log('OrderNumber', this.OrderNumberArr);
  //     return true;
  //   });
  // }
  GatePassNumberLoad() {
    var req = {
      Company: this.Company,
      Years: this.year,
      Order_No:   this.ordr,
      Party_Name: '',
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
  }
  ReceiptGridDetailsLoad() {
    var req = {
      Company: this.Company,
      Years: this.year,
      Y_Rec_No:  this.ordr,
    };
    this.commonprovider.ReceiptGridDetailsLoad(req).then((result) => {
      
      var res: any;
      res = result;
      this.GridDetailsLoad = res;

      for (var i = 0; i < this.GridDetailsLoad.length; i++) {
        console.log('Ordered', this.GridDetailsLoad[i]['Ordered']);
        this.Sno = i;
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
        this.Insp_Comp_Status = this.GridDetailsLoad[i]['Insp_Comp_Status'];
        this.Yarn_Kora_Allot_Id = this.GridDetailsLoad[i]['Y_Kora_Allot_Id'];
        this.Y_Kora_Allot_Id_Pur =
          this.GridDetailsLoad[i]['Y_Kora_Allot_Id_Pur'];
        this.Y_Color_Allot_Id = this.GridDetailsLoad[i]['Y_Color_Allot_Id'];
        this.Y_Color_Allot_Id_Pur =
          this.GridDetailsLoad[i]['Y_Color_Allot_Id_Pur'];
        this.Y_Rec_No = this.GridDetailsLoad[i]['Y_Rec_No'];
        //this.Y_Kora_Allot_Id_Pur  = this.GridDetailsLoad[i]["Y_Kora_Allot_Id_Pur"]  Y_Color_Allot_Id
        // localStorage.setItem('PoNo',this.Y_PO_No)
        localStorage.setItem('WrK', this.WorkOrderNo);
        localStorage.setItem('Count', this.Count);
        localStorage.setItem('CardNo', this.CardNo);
        localStorage.setItem('Unit', this.Unit);
        localStorage.setItem('Bags', this.Bags);
        localStorage.setItem('Balance', this.Balance);
        localStorage.setItem('NRCQty', this.Now_Received_Qty);
        localStorage.setItem('Received', this.Received);
        localStorage.setItem('Stock_Pur', this.Stock_Pur);
        localStorage.setItem('Y_Color_Allot_Id', this.Y_Color_Allot_Id);
        localStorage.setItem('Y_Color_Allot_Id_Pur', this.Y_Color_Allot_Id_Pur);
        localStorage.setItem('Y_Kora_Allot_Id', this.Y_Kora_Allot_Id);
        localStorage.setItem('Y_Kora_Allot_Id_Pur', this.Y_Kora_Allot_Id_Pur);
        localStorage.setItem('Y_Ord_Det_Id', this.Y_Ord_Det_Id);
        localStorage.setItem('Y_Ord_Id', this.Y_Ord_Id);
        localStorage.setItem('Y_PO_No', this.Y_PO_No);
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
        localStorage.setItem('Lotno', this.Lotno);
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
      }
      console.log('GridDetailsLoad', this.GridDetailsLoad);
      return true;
    });
  }
  onchangeDate(event) {
    this.ReceiptGridDetailsLoad();
    // this.Save();
  }
  Save() {
    for (var i = 0; i < this.GridDetailsLoad.length; i++) {
      console.log('Ordered', this.GridDetailsLoad[i]['Ordered']);
    }
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
    this.Y_Color_Allot_Id = localStorage.getItem('Y_Color_Allot_Id');
    this.Y_Color_Allot_Id_Pur = localStorage.getItem('Y_Color_Allot_Id_Pur');
    this.Y_Kora_Allot_Id = localStorage.getItem('Y_Kora_Allot_Id');
    this.Y_Kora_Allot_Id_Pur = localStorage.getItem('Y_Kora_Allot_Id_Pur');
    this.Y_Ord_Det_Id = localStorage.getItem('Y_Ord_Det_Id');
    this.Y_Ord_Id = localStorage.getItem('Y_Ord_Id');
    this.Y_PO_No = localStorage.getItem('Y_PO_No');
    this.Y_Rec_Det_Id = localStorage.getItem('Y_Rec_Det_Id');
    this.cone_wt = localStorage.getItem('cone_wt');
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
    this.Y_REC_ID = localStorage.getItem('Y_Rec_ID');
    this.Yarn_Kora_Allot_Id = localStorage.getItem('Yarn_Kora_Allot_Id');
    this.Y_Kora_Allot_Id_Pur = localStorage.getItem('Y_Kora_Allot_Id_Pur');
    this.Y_Color_Allot_Id = localStorage.getItem('Y_Color_Allot_Id');
    this.Y_Color_Allot_Id_Pur = localStorage.getItem('Y_Color_Allot_Id_Pur ');
    this.Rec_No = localStorage.getItem('Y_Rec_No');

    var req = {
      Company: this.Company,
      years: this.year,
      y_Rec_No: this.Rec_No,
      Y_Rec_Date: this.CurDate,
      Yarn_Count: '',
      Nos: '',
      Yarn_Po_No: this.PoNo,
    //  Supplier_Name: this.PartyNameArr[0].Buyer_Id,
    //  Supplier_Code: this.PartyNameArr[0].Name,
      WorkOrderNo: this.WorkOrder,
      Y_Po_No: this.Y_PO_No,
      Supplier_DC_No: this.DcNo,
      branch: this.Branch,
      Warehouse: this.Warehouse,
      Supplier_DC_Date: this.CurDate,
      Color_Name: this.Color,
      Mill_Name: this.MillName,
      Ordered: this.Ordered,
      Bag_UOM: this.Bag_UOM,
      Stock_Pur: this.Stock_Pur,
      Received: this.Received,
      Now_Received_Qty: this.NRCQty,
      Bags: this.Bags,
      UOM: this.uom,
      Cones: this.Cones,
      Cone_UOM: this.Cone_UOM,
      Cone_Wt: this.cone_wt,
      Cones_Per_Bag: this.Conebag,
      Bag_Wt: this.Conebag,
      Remarks: this.Remark,
      Ex_Per: this.Ex_Per,
      Y_Ord_Id: this.Y_Ord_Id,
      Y_Ord_Det_Id: this.Y_Ord_Det_Id,
      Y_Kora_Allot_Id: this.Y_Kora_Allot_Id,
      Y_Kora_Allot_Id_Pur: this.Y_Kora_Allot_Id_Pur,
      Y_Color_Allot_Id: this.Y_Color_Allot_Id,
      Y_Color_Allot_Id_Pur: this.Y_Color_Allot_Id_Pur,
      Y_Rec_Id: this.Y_REC_ID,
      lot_no: this.LotNum,
      Rec_RetRec: '0',
      Pack_Type: '',
      Y_Ret_ID: this.y_ret_id,
      Y_Ret_No: '',
      Y_Ret_Det_ID: this.y_ret_det_id,
      Inspected_Qty: this.Inspected_Qty,
      Insp_Comp_Status: this.Insp_Comp_Status,
      Rec_Amt: this.Rec_Amt,
      Rec_Rate: this.Rec_Rate,

      Cone_wgt: '',
      Cones_Per_Pack: this.Cones,
      Pack_Wgt: this.wtpack,
      Y_Rec_Det_Id: this.Y_Rec_Det_Id,
    //  y_ret_id: this.PartyNameArr[0].y_ret_id,
      No_of_Packs: this.Pack,
      Single_Pack_Wt: this.Single,
      Card_No: this.CardNo,
      Y_Rec_No: this.OrderNumber,
      Pack_No: '',
      Save_User: '//0007E9436187 /APP USER/ ADMIN - ADMIN/ 11/11/2022 16:22:53',
      Edit_User: '//0007E9436187 /APP USER/ ADMIN - ADMIN/ 11/11/2022 16:22:53',
      Tot_Rec_Amt: '100',
    };
    this.commonprovider.YarnReturnReceiptInsert(req).then((result) => {
      this.save = result;
      console.log('Save', this.save);
      this.commonprovider.presentToast('Save Successfully');
      return true;
    });
  }
  Edit() {
    for (var i = 0; i < this.GridDetailsLoad.length; i++) {
      console.log('Ordered', this.GridDetailsLoad[i]['Ordered']);
    }
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
      y_Rec_No: this.Rec_No,
      Y_Rec_Date: this.CurDate,
      Yarn_Count: '',
      Nos: '',
      Yarn_Po_No: this.PoNo,
   //   Supplier_Name: this.PartyNameArr[0].Buyer_Id,
   //   Supplier_Code: this.PartyNameArr[0].Name,
      WorkOrderNo: this.WorkOrder,
      Y_Po_No: this.Y_PO_No,
      Supplier_DC_No: this.DcNo,
      branch: this.Branch,
      Warehouse: this.Warehouse,
      Supplier_DC_Date: this.CurDate,
      Color_Name: this.Color,
      Mill_Name: this.MillName,
      Ordered: this.Ordered,
      Bag_UOM: this.Bag_UOM,
      Stock_Pur: this.Stock_Pur,
      Received: this.Received,
      NRCQty: this.NRCQty,
      Bags: this.Bags,
      UOM: this.uom,
      Cones: this.Cones,
      Cone_UOM: this.Cone_UOM,
      Cone_Wt: this.cone_wt,
      Cones_Per_Bag: this.Conebag,
      Bag_Wt: this.Conebag,
      Remarks: this.Remark,
      Ex_Per: this.Ex_Per,
      Y_Ord_Id: this.Y_Ord_Id,
      Y_Ord_Det_Id: this.Y_Ord_Det_Id,
      Y_Kora_Allot_Id: this.Y_Kora_Allot_Id,
      Y_Kora_Allot_Id_Pur: this.Y_Kora_Allot_Id_Pur,
      Y_Color_Allot_Id: this.Y_Color_Allot_Id,
      Y_Color_Allot_Id_Pur: this.Y_Color_Allot_Id_Pur,
      Y_Rec_Id: this.Y_REC_ID,
      lot_no: this.LotNum,
      Rec_RetRec: '0',
      Pack_Type: '',
      Y_Ret_ID: this.y_ret_id,
      Y_Ret_No: '',
      Y_Ret_Det_ID: this.y_ret_det_id,
      Inspected_Qty: this.Inspected_Qty,
      Insp_Comp_Status: this.Insp_Comp_Status,
      Rec_Amt: this.Rec_Amt,
      Rec_Rate: this.Rec_Rate,

      Cone_wgt: '',
      Cones_Per_Pack: this.Cones,
      Pack_Wgt: this.wtpack,
      Y_Rec_Det_Id: this.Y_Rec_Det_Id,
    //  y_ret_id: this.PartyNameArr[0].y_ret_id,
      No_of_Packs: this.Pack,
      Single_Pack_Wt: this.Single,
      Card_No: this.CardNo,
      Y_Rec_No: this.OrderNumber,
      Pack_No: '',
      Save_User: '//0007E9436187 /APP USER/ ADMIN - ADMIN/ 11/11/2022 16:22:53',
      Edit_User: '//0007E9436187 /APP USER/ ADMIN - ADMIN/ 11/11/2022 16:22:53',
      Tot_Rec_Amt: '100',
    };
    this.commonprovider.YarnReceiptEditLoad(req).then((result) => {
      this.save = result;
      console.log('Edit', this.save);
      this.commonprovider.presentToast('Edit Successfully');
      return true;
    });
  }

  Delete() {
    for (var i = 0; i < this.GridDetailsLoad.length; i++) {
      console.log('Ordered', this.GridDetailsLoad[i]['Ordered']);
    }
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
      Y_Rec_No: this.Rec_No,
      Y_Rec_Date: this.CurDate,
      Yarn_Count: '',
      Nos: '',
      Yarn_Po_No: this.PoNo,
   //   Supplier_Name: this.PartyNameArr[0].Buyer_Id,
   //   Supplier_Code: this.PartyNameArr[0].Name,
      WorkOrderNo: this.WorkOrder,
      Y_Po_No: this.Y_PO_No,
      Supplier_DC_No: this.DcNo,
      branch: this.Branch,
      Warehouse: this.Warehouse,
      Supplier_DC_Date: this.CurDate,
      Color_Name: this.Color,
      Mill_Name: this.MillName,
      Ordered: this.Ordered,
      Bag_UOM: this.Bag_UOM,
      Stock_Pur: this.Stock_Pur,
      Received: this.Received,
      NRCQty: this.NRCQty,
      Bags: this.Bags,
      UOM: this.uom,
      Cones: this.Cones,
      Cone_UOM: this.Cone_UOM,
      Cone_Wt: this.cone_wt,
      Cones_Per_Bag: this.Conebag,
      Bag_Wt: this.Conebag,
      Remarks: this.Remark,
      Ex_Per: this.Ex_Per,
      Y_Ord_Id: this.Y_Ord_Id,
      Y_Ord_Det_Id: this.Y_Ord_Det_Id,
      Yarn_Kora_Allot_Id: this.Y_Kora_Allot_Id,
      Yarn_Kora_Allot_Id_Pur: this.Y_Kora_Allot_Id_Pur,
      Yarn_Color_Allot_Id: this.Y_Color_Allot_Id,
      Yarn_Color_Allot_Id_Pur: this.Y_Color_Allot_Id_Pur,
      Y_Rec_Id: this.Y_REC_ID,
      lot_no: this.LotNum,
      Rec_RetRec: '0',
      Pack_Type: '',
      Y_Ret_ID: this.y_ret_id,
      Y_Ret_No: '',
      Y_Ret_Det_ID: this.y_ret_det_id,
      Inspected_Qty: this.Inspected_Qty,
      Insp_Comp_Status: this.Insp_Comp_Status,
      Rec_Amt: this.Rec_Amt,
      Rec_Rate: this.Rec_Rate,

      Cone_wgt: '',
      Cones_Per_Pack: this.Cones,
      Pack_Wgt: this.wtpack,
      Y_Rec_Det_Id: this.Y_Rec_Det_Id,
   //   y_ret_id: this.PartyNameArr[0].y_ret_id,
      No_of_Packs: this.Pack,
      Single_Pack_Wt: this.Single,
      Card_No: this.CardNo,
      Pack_No: '',
      Save_User: '//0007E9436187 /APP USER/ ADMIN - ADMIN/ 11/11/2022 16:22:53',
      Edit_User: '//0007E9436187 /APP USER/ ADMIN - ADMIN/ 11/11/2022 16:22:53',
      Tot_Rec_Amt: '100',
    };
    this.commonprovider.YarnReceiptdeleteLoad(req).then((result) => {
      this.save = result;
      console.log('Delete', this.save);
      this.commonprovider.presentToast('Delete Successfully');
      return true;
    });
  }
  // editscreen() {
  //   this.router.navigate(['bagdetails']);
  //   this.Edit();
  // }



  Add() {
    this.router.navigate(['bagdetails']);
    // this.count = 0;
    console.log('count', this.count);
    //$('.chb').change(function () {
//$('.chb').prop('checked', false);
//$(this).prop('checked', true);
   // });
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
            this.Delete();
            this.handlerMessage = 'Alert confirm';
            console.log('alert', this.handlerMessage);
          },
        },
      ],
    });
    await alert.present();
  }

  PartyName1(event: { component: IonicSelectableComponent; value: any }) {
    
    console.log('port:', event.value.PartyName);
    this.party = event.value.PartyName
    this.WorkOrderNumberLoad();
 
  }
  portChange(event: { component: IonicSelectableComponent; value: any }) {
    
    console.log('port:', event.value);
 
  }
  portChange1(event: { component: IonicSelectableComponent; value: any }) {
    
    console.log('port:', event.value. WorkOrder);
    this.wrk = event.value.WorkOrder
   this. OrderNumberLoad() 
  }
  portChangeOrdNo(event: { component: IonicSelectableComponent; value: any }) {
    
    console.log('port:', event.value.WorkOrder);
    this.ordr = event.value.Orde
    this.GatePassNumberLoad()
  }
  ngOnInit() {}
}


  
