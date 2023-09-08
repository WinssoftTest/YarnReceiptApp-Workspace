import { Component, OnInit } from '@angular/core';
 
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../abi/common.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-fabricreceiptsave',
  templateUrl: './fabricreceiptsave.page.html',
  styleUrls: ['./fabricreceiptsave.page.scss'],
})
export class FabricreceiptsavePage implements OnInit {
 
  PurchaseReceipt: any;
  Baleno:any;
  LotNo:any;
  NoOfPcs:any;
  openedCards: any = [];
  
  selectedArr: any =[];
  openedCardsS: any =[];
  totalconversion: any;
  newIndex: number;
  nowselect: any;
  totalQty: number;
  balance: any;
  Qty:any;
  isButton: boolean;
  EntryNo: string;
  Saveload: any;
  RecWgt: number;
  Company = localStorage.getItem('Company');
  Branch = localStorage.getItem('Branch');
  year = localStorage.getItem('Year'); 
  UserName = localStorage.getItem('User');
  warehouse=localStorage.getItem('fabricWarehousen');
  DCno = localStorage.getItem('fabricDCno');
  suppliername =localStorage.getItem('fabricsuppliername')
  PartyCode=localStorage.getItem('fabricPartyCode')
  BuyerId=localStorage.getItem('fabricBuyerId')
  Gatepassno = localStorage.getItem('fabricGatepassno')
  PoNum = localStorage.getItem('fabricPoNumSTORE');
  fabricOrdertype = localStorage.getItem('fabricOrdertype' )
  fabricSamplebulk = localStorage.getItem('fabricSamplebulk')
  FabricselectGrid: any;
  Articlename: any;
  Barcode_No: any;
  Change_Size: any;
  Change_Width: any;
  Color: any;
  Order_Id: any;
  Order_Main_Id: any;
  Order_Uom: any;
  Ordered_Purchase_Rate: any;
  ProductNo_Id: any;
  Product_Name: any;
  Pur_Received: any;
  Samplename: any;
  Stk_Pur: any;
  Warehouse: any;
  aliasname: any;
  Weight_Per_UOM: any;
  articleno: any;
  exper: any;
  funit: any;
  length: any;
  Orderedetailid: any;
  ordqty: any;
  orderno: any;
  ordwgt: any;
  productdec: any;
  purchasename: any;
  rateunit: any;
  remark: any;
  size: any;
  unit: any;
  width: any;
  workorderno: any;
  recamt: number;
  PcsNo:number=1
  constructor(private commonprovider: CommonService, 
    private _yt: FormBuilder,   public httpClient: HttpClient,
    public router: Router
    
  ) { 
    this.PurchaseReceipt =   this._yt.group({
      Baleno:["",[Validators.required]],
      LotNo:["",[Validators.required]],
      NoOfPcs:["",[Validators.required]],
    //  PcsNo:["",[Validators.required]],
    PcsNo: ["",[Validators.required]],
      Qty:["",[Validators.required]],
      Wgt:["",[Validators.required]],
      Pcsnocount:["",[Validators.required]],
      Loomno:["",[Validators.required]]
    })
    this.FabricselectGrid =  JSON.parse(localStorage.getItem('FabricselectGrid') as string)   
    for(var i = 0 ; i < this.FabricselectGrid.length; i++)
   {
   this.Articlename = this.FabricselectGrid[i].Article_Name,
   this.Barcode_No= this.FabricselectGrid[i].Barcode_No
   this.Change_Size = this.FabricselectGrid[i].Change_Size
   this.Change_Width = this.FabricselectGrid[i].Change_Width
   this.Color = this.FabricselectGrid[i].Color
   this.Order_Id = this.FabricselectGrid[i].Order_Id
   this.Order_Main_Id = this.FabricselectGrid[i].Order_Main_Id
   this.Order_Uom = this.FabricselectGrid[i].Order_Uom
   this.Ordered_Purchase_Rate = this.FabricselectGrid[i].Ordered_Purchase_Rate
   this.ProductNo_Id = this.FabricselectGrid[i].ProductNo_Id
   this.Product_Name = this.FabricselectGrid[i].Product_Name
   this.Pur_Received = this.FabricselectGrid[i].Pur_Received
   this.Samplename = this.FabricselectGrid[i].Samplename
   this.Stk_Pur = this.FabricselectGrid[i].Stk_Pur
   this.Warehouse = this.FabricselectGrid[i].Warehouse
   this.Weight_Per_UOM = this.FabricselectGrid[i].Weight_Per_UOM
   this.aliasname = this.FabricselectGrid[i].aliasname
   this.articleno = this.FabricselectGrid[i].articleno
   this.exper = this.FabricselectGrid[i].exper
   this.funit = this.FabricselectGrid[i].funit
   this.length = this.FabricselectGrid[i].length
   this.Orderedetailid = this.FabricselectGrid[i].Orderedetailid
   this.orderno = this.FabricselectGrid[i].orderno
   this.ordqty = this.FabricselectGrid[i].ordqty
   this.ordwgt = this.FabricselectGrid[i].ordwgt
   this.productdec = this.FabricselectGrid[i].productdec
   this.purchasename = this.FabricselectGrid[i].purchasename
   this.rateunit = this.FabricselectGrid[i].rateunit,
   this.remark = this.FabricselectGrid[i].remark
   this.size = this.FabricselectGrid[i].size
   this.unit = this.FabricselectGrid[i].unit
   this.width = this.FabricselectGrid[i].width
   this.workorderno = this.FabricselectGrid[i].workorderno,
   this.balance = Number(this.ordqty) -  Number(this.Pur_Received)
   }
  }

  ngOnInit() {
  }
  AddButoon()
{
 console.log( 'PCSNOOOOOOOOOOOOOOOOO' ,this.PcsNo)
     if(this.NoOfPcs == null ||  this.NoOfPcs == undefined)
    {
      this.commonprovider.FailedToast('Enter Rec Pcs')
    }
    else{
    for (let i = 0; i < this.NoOfPcs; i++) {
      
       this.openedCards.push({ LotNo:  this.PurchaseReceipt.value.LotNo,
         PcsNo: "" ,  Qty:this.PurchaseReceipt.value.Reject});
    }
  }
   }
   incrementPcsNo() {
    // Get the current value of the PcsNo form control
    let currentPcsNo = this.PurchaseReceipt.value.get('PcsNo').value;

    // Increment the value by 1
    currentPcsNo += 1;

    // Update the PcsNo form control with the new value
    this.PurchaseReceipt.value.get('PcsNo').setValue(currentPcsNo);
  }
   itemClick(jw:any  , index:any)
   {
     console.log('MY INDEX POSSITION',index)
     
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
       this.openedCardsS.push({  LotNo:  this.PurchaseReceipt.value.LotNo,
        PcsNo:this.PurchaseReceipt.value.Pcsnocount,  Qty:this.PurchaseReceipt.value.Qty,Loomno:this.PurchaseReceipt.value.Loomno });
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
          const ok = parseFloat(item.Qty) || 0;
          const itemTotal = ok  
       
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
 
       this.RecWgt = parseFloat(this.Weight_Per_UOM) * parseFloat(itemsload.Qty)
       this.recamt = parseFloat(itemsload.Qty) * parseFloat(this.Ordered_Purchase_Rate)
       console.log('RECWGT',this.RecWgt )
       console.log( 'RECAMT',this.recamt )
      
    var req = {
        ActRecWt: this.RecWgt,
        Company:this.Company,
        Dcno:this.DCno,
        DesignNo:this.articleno,
        Designid:this.ProductNo_Id,
        Ordertype:this.fabricOrdertype,
        Ordmainid:this.Order_Main_Id,
        Rate:this.Ordered_Purchase_Rate,
        RecQty:itemsload.Qty,
        Size:this.size,
        Stkpur:this.Stk_Pur,
        Vehicleno:"",
        Warehouse:this.warehouse,
        articleno:this.articleno,
        baleno:this.Baleno,
        barcode:this.Barcode_No,
        branch:this.Branch,
        calwt:this.RecWgt,
        conrecqty:itemsload.OK,
        date:moment(new Date()).format('YYYY-MM-DD'),
        driver:"",
        gatepassno:this.Gatepassno,
        intime:'00.00',
        length:this.length,
        loomno:itemsload.loomno,
        lotno:this.LotNo,
        noofpcs:this.NoOfPcs,
        nos:itemsload.length,
        orddetid:this.Orderedetailid,
        ordid:this.Order_Id,
        ordno:this.orderno,
        partycode:this.PartyCode,
        partyname:this.suppliername,
        pcsno:this.PcsNo || itemsload.PcsNo,
        productbarcode:this.Barcode_No,
        purchasename:this.purchasename,
        rateunit:this.rateunit,
        recrate:this.Ordered_Purchase_Rate,
        remarke:this.remark,
        samplebulk:this.fabricSamplebulk,
        saveuser:this.size,
        size:this.size,
        totalrecamt:this.recamt,
        unit:this.unit,
        uom:this.unit,
        width:this.width,
        workorderno:this.workorderno,
        wt:this.RecWgt,
        years:this.year,
        entryno:this.EntryNo
      }
  
    const result = await  this.commonprovider.FabricReceiptsave(req)
    this.Save = result;
      console.log('SAVE',  this.Saveload );
      this.PcsNo = Number(this.PcsNo) + 1
      if(this.EntryNo == null || this.EntryNo == undefined || this.EntryNo =="")
      {
     for(var i =  0 ; i < this.Save.length ; i++)
     {
      this.EntryNo = this.Save[i].entry_no;
     }
    }
  }
} 
    
  
  
}
