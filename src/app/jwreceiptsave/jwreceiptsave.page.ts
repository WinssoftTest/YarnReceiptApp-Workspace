import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonicSelectableComponent } from 'ionic-selectable';
 
import { CommonService } from '../abi/common.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jwreceiptsave',
  templateUrl: './jwreceiptsave.page.html',
  styleUrls: ['./jwreceiptsave.page.scss'],
})
export class JwreceiptsavePage implements OnInit {
  isButton : boolean = false;
  isButton1 : boolean = true;
  selectarrayjw: any;
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
  Warehouse= localStorage.getItem('jwWarehouse');
  Gatepass= localStorage.getItem('Gatepass');
  partyname=localStorage.getItem('PartyName');
  Slipno = localStorage.getItem('SilpNo')
  jwSpaceBarGrid: any;
  processName: string;
  jwreceiptgrid: any =[];
  ordQty: any;
  delivery: any;
  Exper: any;
  savegrid: any =[];
  recqty: any;
  Selectedlistarr: any =[];
d: any;
index: any;
  selectedArr: any = [];
  totalconversion: any;
  newIndex: number;
  OrderWgt:any;
  jwreceipt: any;
  width:any;
  Length:any;
  NowRec:any;
  NowRecwt:any;
  PcsBundle:any;
  NoOfBundle:any;
  jwreceiptsav: any;
  shinkerper: any;
  Rate: any;
  Alias_Fabric: any;
  Wact_Wect: any;
  Ex_Rec_Per: any;
  Order_Weight: any;
  
  constructor(private commonprovider: CommonService, 
    private _rr: FormBuilder,   public httpClient: HttpClient,
    public router: Router) {
      this.jwreceiptsav =   this._rr.group({
        OrderWgt:["",[Validators.required]],
        width:["",[Validators.required]], Length:["",[Validators.required]], NowRec:["",[Validators.required]],
        NowRecwt:["",[Validators.required]], PcsBundle:["",[Validators.required]],NoOfBundle:["",[Validators.required]],OrderNumber:["",[Validators.required]]
      })
    this.selectarrayjw = JSON.parse(localStorage.getItem("JwReceiptGrid"));
    for(var  i = 0 ; i <  this.selectarrayjw.length ; i++)
    {
      this.ordQty = this.selectarrayjw[i].JW_ORd_Qty,
      this.delivery = this.selectarrayjw[i].delivery,
      this.Exper = this.selectarrayjw[i].Ex_Rec_Per
      this.recqty = this.selectarrayjw[i].recqty
      this.shinkerper = this.selectarrayjw[i].Shrinkage_Per
      this.Rate = this.selectarrayjw[i].Rate,
      this.Alias_Fabric =  this.selectarrayjw[i].Alias_Fabric,
      this.Wact_Wect  = this.selectarrayjw[i].Wact_Wect,
      this.Ex_Rec_Per  = this.selectarrayjw[i].Ex_Rec_Per,
      this.OrderWgt = this.selectarrayjw[i].Order_Weight


    }
    console.log( this.ordQty)
  this.processName = localStorage.getItem('processname')
  var req = {
    Company: this.Company,
    wrkorder: this.selectarrayjw[0].WorkOrderNo,
   
    partyname:this.partycode,
    process:this.process,
    orderno: this.order,
    jobwork: this.jobwork,
    deliveryno:"",
    subgrid :"subgrid",
    jwordid:this.selectarrayjw[0].jw_ord_id,
    jwdeliid:'',
    partycode:this.partycode,
  };
  this.commonprovider.jobworkReceiptgrid(req).then((result) => {
    this.jwreceiptgrid = result;
    for(var i = 0 ; i < this.jwreceiptgrid.length; i++)
 {
 this.RecQty = this.jwreceiptgrid[i].recqty
 }
    console.log('dataaaaaa', this.RecQty)
    this.jwReceiptSpacebarGridLoad();
 
  });
  
//  for(var i = 0 ; i < this.jwreceiptgrid.length; i++)
//  {
//  this.RecQty = this.jwreceiptgrid[i].recqty
//  }

    }
    itemClic(jw: any, index: any) {
      if(Number(this.NowRec) > this.delivery - this.recqty )
      {
alert('Qty Exceeds')
      }
      else{
      this.isButton  = true;
      this.isButton1  = false;
      console.log('MY INDEX POSSITION',index)
        var item = jw.selected;
      if (item == true) {
        jw["selected"] = false;
        this.selectedArr.splice(index, 1);
     
        console.log(this.selectedArr);
      } else {
        jw["selected"] = true;
        this.selectedArr.push(jw);
        this.totalconversion = jw;
      }
      console.log('SELECT ARRARYYYYYY',this.selectedArr);
        this.newIndex = this.selectedArr.length -1;
  
      }
    }

  jwReceiptSpacebarGridLoad()
  {
  var req = {
    wrkorder: this.selectarrayjw[0].WorkOrderNo,
    partyname:this.partycode,
    partycode:this.partycode,
    orderno:this.order,
    jobwork:this.jobwork,
    company: this.Company,
    yr: this.year,
    jwordid:this.selectarrayjw[0].jw_ord_id,
    process:this.processName,
    jwdeliveryno:this.selectarrayjw[0].Order_No,
 
};
this.commonprovider.jwReceiptSpacebarGridLoad(req).then((result) => {
  var res: any;
  res = result;
  this.jwSpaceBarGrid = res;
 
 
})
}
NowRecWte()
{
  if(Number(this.NowRec) > this.delivery - this.recqty )
  {
alert('Qty Exceeds')
this.NowRec = "";
this.NowRecwt =""
  }
  else{
 console.log(Number(this.OrderWgt) * Number(this.NowRec));
 this.NowRecwt  = Number(this.OrderWgt) * Number(this.NowRec)
  }
}
jwreceiptsave()

  {
    this.isButton  = true;
    for(const itemsload of this.selectedArr)
    {
  var req = {
     
    Current_No_Update:'0',
    Date:moment(new Date()).format('YYYY-MM-DD'),
    Dcwiseinvoice:'0',
    Dept:'JW RECEIPT',
    Dyes_Req:'',
    JW_Ord_id: this.selectarrayjw[0] .jw_ord_id,
    Job_id:this.selectarrayjw[0].job_id,
    MIGPREFNO:this.Gatepass,
    Order_To_New_Supplier:'0',
    Remarks:'-',
    Save_User:this.UserName + '//' +moment(new Date()).format('YYYY-MM-DD'),
    SysName:'MOBILE',
    alias:itemsload.Article_name,
    barcode:'',
    branch:this.Branch,
    checkpcsbndle:2147483647,
    company:this.Company,
    designid:itemsload.Design_Id    ,
    edituser:'',
    endbit:'0.00',
    entryno:'',
    fsid:'0',
    goodsrate:this.Rate ,
    invoicecompstatus:'0',
    invoiceno:'0',
    itemgoodsamt:Number (this.Rate ) * Number(this.recqty),
    itemprocessamt:'0.00',
    itemqty:this.NowRec,
    jobwork:this.jobwork,
    jw_Rec_id:'0',
    jw_deli_id:'0',
    jwdeliveryno:'0',
    jworderno:this.order,
    jwrecmainid:'',
    length:itemsload.F_Length ,
    lotno:'0',
    narrtion:'',
    noofbundles:'0',
    noofitmes:'0',
    nopcsforbundle:'0',
    nos:'0',
    orginfsid:'0',
    partybillno:this.Slipno,
    paymentcompstatus:'0',
    pcsno:'0',
    prefsid:'0',
    process:this.process,
    qtyunit:itemsload.Qty_unit,
    recQty:this.NowRec,
     rec_w_unit:'',
     reccolor:itemsload.Color,
     reccompstatus:'0',
     recdesign:this.Alias_Fabric,
     recdesignno:this.Alias_Fabric,
     reclength:itemsload.F_Width,
     reclunit:itemsload.Exp_Unit,
     recpcswgt:this.selectarrayjw[0] .Order_Weight,
     recproduct:itemsload.Product,
     recqtypcs:'',
     recsize:itemsload.F_Width ,
     recwgt:this.selectarrayjw[0] .Order_Weight,
     reedpick:itemsload.Wact_Wect,
     retid:'0',
     runit:itemsload.JW_ORD_Unit,
    rwidth:itemsload.F_Width,
    saveuser:this.UserName,
    sconqty:'0',
    shrinkper:    this.shinkerper ,
    sizeconversion:'',
    slipdate:moment(new Date()).format('YYYY-MM-DD'),
    slipno:this.Slipno,
    sno:'',
    stockid:'',
    suppliercode:this.partycode,
    supplier:this.partyname,
    wactwept:this.Wact_Wect ,
    warehouse:this.Warehouse,
    wgt:itemsload.Order_Weight,
    workorderno:this.wrkord,
    yr:this.year,
    jwdelidelid:'',
    calwt:this.selectarrayjw[0] .Order_Weight,
    Ex_Rec_Per:this.Ex_Rec_Per,
    recwidth:itemsload.F_Width   
};
this.commonprovider.JwReceiptSave(req).then((result) => {
  var res: any;
  res = result;
  this.savegrid = res;
  alert(this.savegrid[0].Message)
  this.isButton = true;
 })

    }
    
}
ngOnInit() {
}
}
