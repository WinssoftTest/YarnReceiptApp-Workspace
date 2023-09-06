import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../abi/common.service';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-knittingsave',
  templateUrl: './knittingsave.page.html',
  styleUrls: ['./knittingsave.page.scss'],
})
export class KnittingsavePage implements OnInit {
  knittingReceiptsave: any;
  Company = localStorage.getItem('Company');
  Branch = localStorage.getItem('Branch');
  year = localStorage.getItem('Year'); 
  UserName = localStorage.getItem('User');
  warehouse=localStorage.getItem('Warehousen');
  DCno = localStorage.getItem('DCno');
  suppliername =localStorage.getItem('suppliername')
  PartyCode=localStorage.getItem('PartyCode')
  BuyerId=localStorage.getItem('BuyerId')
  Gatepass= localStorage.getItem('Gatepassno')
 workorder = localStorage.getItem('WorkOrder' )
 PoNumber = localStorage.getItem('PoNumber'  )
 Vehicle= localStorage.getItem('Vehicle' )
 DcNo = localStorage.getItem('DcNo')
 Intime =  localStorage.getItem('InTime'  ) 
 Driver= localStorage.getItem('Driver' )
Baleno: any;
NoOfPcs:any;
  openedCards: any =[];
  selectedArr: any =[];
  openedCardsS: any =[];
  totalconversion: any;
  newIndex: number;
  nowselect: any;
  totalQty: number;
  balance: any;
isButton: any;
 SelectArr =  JSON.parse(localStorage.getItem('kNITTNGSELETARR') as string)   
  supllier: any;
  Rateunit: any;
  Allotfabid: any;
  wvgordid: any;
  Rate: any;
  save: any;
  entryno: string;
  count: any;
  product: any;
  Save: any;
  OrderQty: any;
  Received: any;
  constructor(private commonprovider: CommonService, 
    private _rr: FormBuilder,   public httpClient: HttpClient,
    public router: Router
     ) 
  { this.knittingReceiptsave = this._rr.group({
    Baleno:["",[Validators.required]],
    NoOfPcs:["",[Validators.required]],
    LoomNo:["",[Validators.required]],
    WeftNo:["",[Validators.required]],
    SetNo:["",[Validators.required]],
    Weight:["",[Validators.required]],
    Qty:["",[Validators.required]]
  })
  for(var i = 0 ; i <  this.SelectArr.length ;i++)
  {
  
   this.OrderQty = this.SelectArr[i].OrderQty  
   this.Received = this.SelectArr[i].Received 
   this.balance = Number(this.OrderQty) - Number(this.Received) 
  }
}
BACK()
{

}
AddButoon()
{
  

if(this.Baleno == null ||  this.Baleno == undefined ||  this.Baleno == 0)
 {
   this.commonprovider.FailedToast('Enter Bale No')
 } 

 else if(this.NoOfPcs == null ||  this.NoOfPcs == undefined)
 {
   this.commonprovider.FailedToast('Enter No Of Pcs')
 } 

 
 else{
 for (let i = 0; i < this.NoOfPcs; i++) {
   
    this.openedCards.push({ OK:  "",
      Defect:"",  Reject:"",Short:""});
 }
}
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
    this.openedCardsS.push({ loomno:  this.knittingReceiptsave.value.loom,
     Weft:this.knittingReceiptsave.value.WeftNo,  Qty:this.knittingReceiptsave.value.Qty ,weight:this.knittingReceiptsave.value.Weight});
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
  
   console.log(this.openedCardsS);
   console.log( 'CARDS',this.openedCardsS)
   jw.selected = false
      }
     
}
async SaveLoad() {
  console.log('RECWGT',)
  this.isButton = !this.isButton;
  for(var i = 0 ; i <  this.SelectArr.length ;i++)
  {
    this.Rateunit =this.SelectArr[i].Rate_Unit,
    this.Allotfabid = this.SelectArr[i].Allot_Fab_id ,
   this.wvgordid = this.SelectArr[i].Wvg_Ord_id 
   this.Rate = this.SelectArr[i].rate,
   this.product = this.SelectArr[i].Product  
  }
  for(const item of this.openedCardsS)
  {
  var req = {
    company: this.Company,
    date:moment(new Date()).format('YYYY-MM-DD'),
    yr: this.year,
    warehouse:this.warehouse,
    vendorname:  this.supllier,
    partycode:this.PartyCode,
    orderno:  this.PoNumber,
    workorderno: this.workorder,
    Silpno:this.DCno,
    slipdate:moment(new Date()).format('YYYY-MM-DD'),
    //recid:this.Selectedlistarr[i].
    recpcs:'1',
    recqty:item.Qty,
    recunit:this.Rateunit,
    recwgt:'0',
    remarks:'-',
    allotfabid:this.Allotfabid ,
    wvgordid: this.wvgordid  ,
    saveuser:this.UserName + '//'+ 'MOBILEAPP' + '//' + moment(new Date()).format('YYYY-MM-DD') ,
    amount:Number(this.Rate) * Number(item.Qty),
    vehicleno:this.Vehicle,
    intime:this.Intime,
    driver:this.Driver,
    gatepassno:this.Gatepass,
    shadeno:'0',
    loomno:'1',
    recproduct:this.product,
    width:this.SelectArr[0].F_Width ,
    length:this.SelectArr[0].F_Length,
    size:this.SelectArr[0].F_Size  ,
    reccolor:this.SelectArr[0].Color ,
    recdesign:this.SelectArr[0].Design_Name ,
    alias:this.SelectArr[0].Alias_name ,
    reccount:this.SelectArr[0].F_Count,
    reedpick:this.SelectArr[0].Reed_Pick ,
    pcsno:'0',
    rate:this.SelectArr[0].rate, 
    rateunit:this.SelectArr[0].Rate_Unit,
    totamt:Number(this.SelectArr[0].rate) * Number(item.Qty),
    baleno:item.bale,
    barcode:'0',
    leftno:'0',
    reason:'',
    setno: this.PoNumber,
    beamno:'0',
    conrecqty:item.Qty,
    recwages:'0',
    branch:this.Branch,
    itemQty:'0',
    items:item.Length,
    nos:'0',
    entryno: this.entryno,
    count:this.count,
    process:"KNITTING",
    partyname:this.suppliername
};

// this.commonprovider.WvgReceiptSave(req).then((result) => {
//   var res: any;
//   res = result;
const result = await  this.commonprovider.WvgReceiptSave(req)
this.Save = result;
 // this.save = res;
  if(this.entryno == "" || this.entryno == null || this.entryno == undefined)
 {
  console.log('entryno',  this.Save[0].entry_no)
  this.entryno =  this.Save[0].entry_no;
}
  }
alert("Record Saved Sucessfully"  + '-'+  this.entryno)
for(var i = 0 ; i < this.Save.length; i++)
{
console.log('countttttttttt',this.Save[i].count)
this.count = this.Save[i].count
console.log('COUNTTT',this.count)
}


}     
Clear()
{

}
  ngOnInit() {
  }

}
