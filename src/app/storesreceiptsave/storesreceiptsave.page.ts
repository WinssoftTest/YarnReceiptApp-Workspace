import { Component, OnInit } from '@angular/core';
import { CommonService } from '../abi/common.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-storesreceiptsave',
  templateUrl: './storesreceiptsave.page.html',
  styleUrls: ['./storesreceiptsave.page.scss'],
})
export class StoresreceiptsavePage implements OnInit {
  StoreReceiptsave: any;
  isButton : boolean = false;
  Rack :any;
  numCards: number = 0;
  openedCards: any[] = [];
  RackLocation:any;
  Company = localStorage.getItem('Company');
  Branch = localStorage.getItem('Branch');
  year = localStorage.getItem('Year'); 
  UserName = localStorage.getItem('User');
  warehouse=localStorage.getItem('Warehousen');
  DCno = localStorage.getItem('DCno');
  suppliername =localStorage.getItem('suppliername')
  PartyCode=localStorage.getItem('PartyCode')
  BuyerId=localStorage.getItem('BuyerId')
  Gatepassno = localStorage.getItem('Gatepassno')
  PoNum = localStorage.getItem('PoNumSTORE')
  SelectArr:any[]  ;
  location: any;
  type: string;
  RackLOAD: any;
  binLOAD: any;
  Bin:any;
  LotNo:any;
  BaleNo:any;
  NoofPcs:any;
  Shortage:any;
  Reject:any;
  Defect:any;
  Ok:any;
  selectedArr: any =[];
  totalconversion: any;
  newIndex: number;
  nowselect: any;
  openedCardsS: any=[];
  Saveload: unknown;
  Alias_Fabric: any;
  CatName: any;
  Category_Name: any;
  Default_Item_location: any;
  Excess_Receive: any;
  Group_Name: any;
  Indent_Id: any;
  Make: any;
  Mat_Code: any;
  Mat_Id: any;
  Mat_Name: any;
  Net_Purchase_Rate: any;
  Order_Id: any;
  PUnit: any;
  Quo_Comp_Id: any;
  Qty: any;
  Rate: any;
  Rate_Unit: any;
  Rate_Unit_Type: any;
  Received: any;
  Req_Unit: any;
  SUnit: any;
  Specifications: any;
  Warehouse: any;
  Weight_Per_Qty: any;
  balance: any;
  quo_comp_No: any;
  size: any;
  store_Ord_Main_id: any;
  workorderno: any;
  RecQty:any  ;
  RecWgt: number = 0;
  EntryNo: null;
  totalQty: any = 0;
  tt: any;
  balancewtynow: any;
  
    constructor(private commonprovider: CommonService, 
    private _rr: FormBuilder,   public httpClient: HttpClient,
    public router: Router) {
       this.StoreReceiptsave =   this._rr.group({
        RackLocation:["",[Validators.required]],
        Rack:["",[Validators.required]],
        Bin:["",[Validators.required]],
        LotNo:["",[Validators.required]],
        BaleNo:["",[Validators.required]],
        NoofPcs:["",[Validators.required]],
        Shortage:["",[Validators.required]],
        Reject:["",[Validators.required]],
        Defect:["",[Validators.required]],
        Ok:["",[ ]],
        RecQty:["",[]]
       })
       this.type = "Location"
       this.locationdetails() ;
       
     this.SelectArr =  JSON.parse(localStorage.getItem('SELECTARR') as string)   
        for(var i = 0 ; i < this.SelectArr.length; i++)
       {
       this.CatName = this.SelectArr[i].Cat_Name,
       this.Category_Name= this.SelectArr[i].Category_Name
       this.Default_Item_location = this.SelectArr[i].Default_Item_location
       this.Excess_Receive = this.SelectArr[i].Excess_Receive
       this.Group_Name = this.SelectArr[i].Group_Name
       this.Indent_Id = this.SelectArr[i].Indent_Id
       this.Make = this.SelectArr[i].Make
       this.Mat_Code = this.SelectArr[i].Mat_Code
       this.Mat_Id = this.SelectArr[i].Mat_Id
       this.Mat_Name = this.SelectArr[i].Mat_Name
       this.Net_Purchase_Rate = this.SelectArr[i].Net_Purchase_Rate
       this.Order_Id = this.SelectArr[i].Order_Id
       this.PUnit = this.SelectArr[i].PUnit
       this.Qty = this.SelectArr[i].Qty
       this.Quo_Comp_Id = this.SelectArr[i].Quo_Comp_Id
       this.Rate = this.SelectArr[i].Rate
       this.Rate_Unit = this.SelectArr[i].Rate_Unit
       this.Rate_Unit_Type = this.SelectArr[i].Rate_Unit_Type
       this.Received = this.SelectArr[i].Received
       this.Req_Unit = this.SelectArr[i].Req_Unit
       this.SUnit = this.SelectArr[i].SUnit
       this.Specifications = this.SelectArr[i].Specifications
       this.Warehouse = this.SelectArr[i].Warehouse
       this.Weight_Per_Qty = this.SelectArr[i].Weight_Per_Qty
       this.balance = this.SelectArr[i].balance
       this.quo_comp_No = this.SelectArr[i].quo_comp_No
       this.size = this.SelectArr[i].size
       this.store_Ord_Main_id = this.SelectArr[i].store_Ord_Main_id,
       this.workorderno = this.SelectArr[i].workorderno

      this.RecQty = this.balance

       console.log(this.CatName)
      }
 
       }
  ngOnInit() {
  }
  QtyChange()
  {
    console.log(this.RecQty )
    console.log(this.balance)
   if(Number(this.balance) < (Number(this.RecQty)))
    {
      this.RecQty =""
       alert('Qty Exceeds')
     }
   //  this.balancewtynow = this.RecQty
  }
  QtyChanges()
  {
    console.log('676')
     this.balance = this.RecQty
    // if((Number(this.balance)) < (Number(this.RecQty)))
    // {
    //   this.RecQty =""
    //    alert('Qty Exceeds')
    //  }
    //  }
  }
  Rackk()
  {
   var req = {
      type : "Rack",
      warehouse : this.warehouse
    };
    this.commonprovider.storesReceiptwarehousedetails(req).then((result) => {
      this.RackLOAD = result;
      console.log('location', this.location);
      return true;
    });
    
  }
  Rackchange()
  {
    var req = {
      type : "Bin",
      warehouse : this.warehouse,
      RackName : this.Rack,
      locataion: this.RackLocation
    };
    this.commonprovider.storesReceiptwarehousedetails(req).then((result) => {
      this.binLOAD = result;
      console.log('binLOAD', this.binLOAD);
      return true;
    });
  }
  locationdetails() {
    var req = {
      type:this.type,
      warehouse : this.warehouse
    };
    this.commonprovider.storesReceiptwarehousedetails(req).then((result) => {
      this.location = result;
      console.log('location', this.location);
      return true;
    });
   }
   AddButoon()
   {
     
 
  if(this.RecQty == null ||  this.RecQty == undefined ||  this.RecQty == 0)
    {
      this.commonprovider.FailedToast('Enter Now Rec Qty')
    } 
 
    else if(this.LotNo == null ||  this.LotNo == undefined)
    {
      this.commonprovider.FailedToast('Enter Lot No')
    } 
   
    else if(this.NoofPcs == null ||  this.NoofPcs == undefined)
    {
      this.commonprovider.FailedToast('Enter Rec Pcs')
    }
    else{
    for (let i = 0; i < this.NoofPcs; i++) {
      
       this.openedCards.push({ OK:  this.StoreReceiptsave.value.Ok,
         Defect:this.StoreReceiptsave.value.Defect,  Reject:this.StoreReceiptsave.value.Reject ,Short:this.StoreReceiptsave.value.Shortage});
    }
  }
   }
   itemClick(jw:any  , index:any)
   {
     console.log('MY INDEX POSSITION',index)
     console.log(this.StoreReceiptsave.value.Ok,  'cardDatad')
     var item = jw.selected;
     if (item == true) {
       jw["selected"] = false;
       this.selectedArr.splice(index, 1);
       this.openedCardsS.splice(index, 1);
       console.log(this.selectedArr);
     } else {
       jw["selected"] = true;
       this.selectedArr.push(jw);
       this.totalconversion = jw;
       this.openedCardsS.push({ OK:  this.StoreReceiptsave.value.Ok,
        Defect:this.StoreReceiptsave.value.Defect,  Reject:this.StoreReceiptsave.value.Reject ,Short:this.StoreReceiptsave.value.Shortage});
     }
     console.log('SELECT ARRARYYYYYY',this.selectedArr);
       this.newIndex = this.selectedArr.length -1;
 
 console.log('INDEX',this.newIndex);
     this.nowselect = jw
     let totalQtySELECT:any = 0;
       for (const item of  this.selectedArr) {
 
       totalQtySELECT = parseFloat(item.Qty);
        }
  
      console.log( 'OPENCARDS',this.openedCardsS)
      this.totalQty = 0;
      for (const item of this.openedCardsS) {
       
        const ok = parseFloat(item.OK) || 0;
        const short = parseFloat(item.Short) || 0;
        const reject = parseFloat(item.Reject) || 0;
        const defect = parseFloat(item.Defect) || 0;
         const itemTotal = ok + short + reject + defect;
       
         this.totalQty += itemTotal;
      }
       if( Number(this.balance) <  Number(this.totalQty))
       {
      alert('Qty Exceeds')
      this.newIndex = this.openedCardsS.length -1;
     
      jw["selected"] = false;
      this.openedCardsS.splice(index, 1);
     // this.openedCardsS[this.newIndex].OK = ""; 
      console.log(this.openedCardsS);
      console.log( 'CARDS',this.openedCardsS)
      jw.selected = false
         }
        
   }
   async Save() {
    this.isButton  = true;
    for(const itemsload of this.openedCardsS)
      {
      console.log('23', this.Weight_Per_Qty * itemsload.OK)
       this.RecWgt =this.Weight_Per_Qty * itemsload.OK
      console.log('dd',(itemsload.Defect / 100) * (this.RecQty))
      this.Defect = (itemsload.Defect / 100) * (this.RecQty)
      console.log('TOTALLL',this.tt =parseFloat(itemsload.OK)  + parseFloat(itemsload.Reject) +  parseFloat (itemsload.Short) + (itemsload.Defect) )
      if(itemsload.Defect == "")
      {
        itemsload.Defect = 0
      }
      if(itemsload.Short == "")
      {
        itemsload.Short = 0
      }
      if(itemsload.Reject == "")
      {
        itemsload.Reject = 0
      }
      if(itemsload.OK == "")
      {
        itemsload.OK = 0
      }
    var req = {
      ActRecWt: this.RecWgt,
      AcutalGrossWt: this.RecWgt,
      BatchNo:'0',
      BillReeiptNo:"",
      CatName:this.CatName,
      Company:this.Company,
      Dcno:this.DCno,
      Defect:itemsload.Defect,
      Group_Name:this.Group_Name,
      Indentid:this.Indent_Id,
      LeeTime:'0',
      ManuFactorDate:"",
      MatName:this.Mat_Name,
      Mat_code: this.Mat_Code,
      Matid:this.Mat_Id,
      MobileEntry:1,
      Rate:this.Rate,
      Rate_Unit:this.Rate_Unit,
    //  RecQty:this.re,
      Rec_Weight: this.RecWgt,
      SUnit_Qty:itemsload.OK,
      Shortage:itemsload.Short,
      Stock_In_Hand:'0.00',
      Stock_Unit_Wt:this.Weight_Per_Qty * itemsload.OK,
      StoreOrdMainId:this.store_Ord_Main_id,
      StoreordDetaildId:"",
      Sunit:this.SUnit,
      Supplierid:this.BuyerId,
      TareWt:0.00,
      Vendorid:this.BuyerId,
      Warehouse:this.warehouse,
      acutaltarewt:this.Weight_Per_Qty * itemsload.OK,
      allotno:this.workorderno,
      branch:this.Branch,
      categoryname:this.Category_Name,
      date:moment(new Date()).format('YYYY-MM-DD'),
      defectPer:this.Defect ,
      defectper:this.Defect ,
      defectqty:itemsload.Defect,
      expdate:"",
      gatepassno:this.Gatepassno,
      itemlocation:this.RackLocation,
      lesper:this.Defect ,
      locationno:this.Bin,
      make:this.Make,
      model:"",
      nos:0,
      ok:itemsload.OK,
      okqty:itemsload.OK,
      ordid:this.Order_Id,
      ordno:this.PoNum,
      partycode:this.PartyCode,
      partyname:this.suppliername,
      purunitwt:this.RecWgt,
      quoNo:0,
      quocompid:0,
      rackName:this.Rack,
      receiptid:"",
      RecQty: parseFloat(itemsload.OK)  + parseFloat(itemsload.Reject) +  parseFloat (itemsload.Short) + (itemsload.Defect) ,
      recwgt:itemsload.Weight_Per_Qty * itemsload.OK,
      rejectqty:itemsload.Reject,
      remarke:"-",
      saveuser:this.UserName,
      shortage:itemsload.Short,
      size:this.size,
      specification:this.Specifications,
      stock_uom:this.SUnit,
      stockqty:itemsload.OK,
      sunitqty:this.SUnit,
      testingCharge:0.00,
      testingcharge:0.00,
      unit:this.PUnit,
      weightperqty:this.Weight_Per_Qty,
      workorderno:this.workorderno,
      years:this.year,
      lotno:this.LotNo,
      Baleno:this.BaleNo,
      pcsno:this.NoofPcs,
      entryno : this.EntryNo
    };
    const result = await  this.commonprovider.storesReceiptsave(req)
    this.Save = result;
      console.log('SAVE',  this.Saveload );
      if(this.EntryNo == null || this.EntryNo == undefined || this.EntryNo =="")
      {
     for(var i =  0 ; i < this.Save.length ; i++)
     {
      this.EntryNo = this.Save[i].entry_no;
     }
  }
}  if( this.EntryNo != '')
      {
        alert("Record Saved Sucessfully" + '-' +  this.EntryNo)
      }
      return true;
     
   }
  
  
  BACK()
{
  this.router.navigate(['./storespurchasereceipt'])
}
   Clear()
   {
    
   }
}
