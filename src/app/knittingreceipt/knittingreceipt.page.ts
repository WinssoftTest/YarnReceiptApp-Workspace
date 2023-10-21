import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IonicSelectableComponent } from 'ionic-selectable';
 
import { CommonService } from '../abi/common.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

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
  selector: 'app-knittingreceipt',
  templateUrl: './knittingreceipt.page.html',
  styleUrls: ['./knittingreceipt.page.scss'],
})
export class KnittingreceiptPage implements OnInit {

  values = 1;
  PartyName: PartyName[];
  Workordr: Workordr[];
  Orde: Orde[];
  WeavingReceipt: any;
  Warehouse:any;
  Company = localStorage.getItem('Company');
  Branch = localStorage.getItem('Branch');
  year = localStorage.getItem('Year'); 
  UserName = localStorage.getItem('User')
  WH: any;
  supllier: any;
  BuyerId: any;
  PartyCode: any;
  Production = "NO";
  Own = "0";
  isButton : boolean = true;
  wrkord: any;
  ordr: any;
  OrderNumber:any;
  WorkOrder:any;
  Arr = Array; //Array type captured in a variable
  num:number = 20;
 
  Selectedlistarr = [] ;
  selectedArr :any;
  SaveGriddeatils: any;
  RecSize = "";
  GridDetailsLoad: any;
 
F_Width:any;
  req: any;
  Rec: any;
  PartyNamel: string;
  DC:any;
  VehNo:any;
  InTime:any =  moment().format('hh:mm');
  GatePass:any;
  DriverName:any;
  Mtr:any;
  Wgt:any;
  Beam:any='-';
  Set:any;
  Weft:any;
  BaleNo:any;
  pcsno: any;
  Reasonn ="Between";
  Reason:any = [{id:1, val:"Between"},
  {id:2 ,val:"Full Runout"},
  {id:3 ,val:"Half Runout"},
  {id:4 ,val:"FirstPiece"}];
  Received: any;
  orderqty: any;
  entryno: string = "";
  save: any;
  barcode: any;
  Current_No1: any;
  barno: any;
  count: any = "0";
  
  constructor(private commonprovider: CommonService, 
    private _rr: FormBuilder,   public httpClient: HttpClient,
    public router: Router
     ) 
  { this.WeavingReceipt = this._rr.group({
    Warehouse:["",[Validators.required]],
    PartyName:["",[Validators.required]],
    Production:["",[Validators.required]],
    Own:["",[Validators.required]],
    OrderNumber:["",[Validators.required]],
    WorkOrder:["",[Validators.required]],
    GatePass:["",[Validators.required]],
    RecSize:["",[Validators.required]],
    F_Width:["",[Validators.required]],
    DC:["",[Validators.required]],
    VehNo:["",[Validators.required]],
    InTime:["",[Validators.required]],
    DriverName:["",[Validators.required]],
    Mtr:["",[Validators.required]],
    Wgt:["",[Validators.required]],
    Beam:["",[Validators.required]],
    Set:["",[Validators.required]],
    Weft:["",[Validators.required]],
    BaleNo:["",[Validators.required]],
    Reason:["",[Validators.required]],
    Reasonn:["",[Validators.required]]
  }); 
  this.WareHouseNameLoad();
  this. 
  PartyNameLoad() 
}
Resupplys()
{

}
UnitType()
{

}
IntimeChange()
{
  console.log(this.InTime)
}
BACK()
{
  this.router.navigate(['./home'])
}
WareHouseNameLoad() {
  var req = {
    company: this.Company,
    Branch_Name:this.Branch,
    statement: 'WeavingFirstPices',
    UserName:this.UserName
  };
  this.commonprovider.GetWareHouseNameLoad(req).then((result) => {
    this.WH = result;
    console.log('WareHouseName', this.WH);
    return true;
  });
 }
  
 PartyNameLoad() {
  var req = {
    Company: this.Company,
    own_unit:this.Own,
    prodType:this.Production,
    Branch_Name: this.Branch,
    processNameload: 'WeavingReceipt',
    Years: this.year,
    process : "Knitting"
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

WarehouseName()
{
this. 
PartyNameLoad() 
}
portChange(event: { component: IonicSelectableComponent; value: any }) {
  console.log('RouteList',  this.PartyName);
  console.log('port:', event.value.PartyName);

  this.supllier = event.value.PartyName
  this.BuyerId = event.value.Buyer_id 
  console.log('pARTCODE',event.value.PartyCode)
  this.PartyCode = event.value.PartyCode 
  this.WorkOrderNumberLoad();

}
WorkOrderNumberLoad()  {
  var req = {
  Company: this.Company,
  statement: 'WeavingReceipt',
  Years: this.year,
  PartyCode:this.PartyCode,
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
  
  var req = {
  Company: this.Company,
  Branch_Name: this.Branch,
  statement: 'WeavingReceipt',
  Workorderno:this.wrkord,
  Years: this.year,
  partyCode:this.PartyCode,
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
portChange1(event: { component: IonicSelectableComponent; value: any }) {
    
  console.log('port:', event.value.WorkOrder);
  this.wrkord = event.value.WorkOrder
 this. OrderNumberLoad() 
}
portChangeOrdNo(event: { component: IonicSelectableComponent; value: any }) {
  console.log('port:', event.value.WorkOrder);
  this.ordr = event.value.Orde
  }
//   ReceiptGridDetailsLoad() {
//    var req = {
//    Company: this.Company,
//    Years: this.year,
//    Y_Rec_No:  this.ordr,
//    Workorderno: this.wrkord
//  };
//  this.commonprovider.ReceiptGridDetailsLoad(req).then((result) => {
//    var res: any;
//    res = result;
//    this.GridDetailsLoad = res; 
//    console.log('34',this.GridDetailsLoad)
//  })
//  console.log('RECEIPT',this.GridDetailsLoad[0].Beam_No)
// }
itemClick(d: any, index: any) {
  this.Selectedlistarr = []
  console.log('Grid',this.GridDetailsLoad)
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
    
   localStorage.setItem('kNITTNGSELETARR',JSON.stringify(this.Selectedlistarr))
   localStorage.setItem('DCno', (this.DC))
   localStorage.setItem('suppliername', (this.supllier))
   localStorage.setItem('PartyCode', ( this.PartyCode))
   localStorage.setItem('BuyerId', this.BuyerId)
   localStorage.setItem('Gatepassno', this.GatePass)
   localStorage.setItem('WorkOrder',this.wrkord )
   localStorage.setItem('PoNumber',this.ordr )
   localStorage.setItem('Warehousen',this.Warehouse )
   localStorage.setItem('Vehicle',this.VehNo )
   localStorage.setItem('DcNo',this.DC )
   localStorage.setItem('InTime',this.InTime )
   localStorage.setItem('Driver',this.DriverName )
  this.router.navigate(["knittingsave"])
  
}

  Add()
  {

    this.SaveGriddeatils = [{ id :"1",name:"aaaaaa"}];
    var j = 10;
    for( var i = 0;i < j ; i++)
    {
      this.SaveGriddeatils.push(this.SaveGriddeatils)
      console.log('23',  this.SaveGriddeatils)
    }
  }
  GridDetailLoad() {
    if(this.Warehouse == "" || this.Warehouse == undefined || this.Warehouse == null )
    {
      this.commonprovider.FailedToast('Select Warehouse')
    }
    else if( this.PartyNamel == "" || this.PartyNamel == undefined || this.PartyNamel == null )
    {
      this.commonprovider.FailedToast('Select Partyname')
    }
    else if(this.wrkord == "" ||this.wrkord == undefined || this.wrkord == null )
    {
      this.commonprovider.FailedToast('Select Workorder')
    }
    else if( this.ordr== "" ||  this.ordr == undefined ||  this.ordr == null )
    {
      this.commonprovider.FailedToast('Select Order')
    }
    else if( this.DC== "" ||  this.DC == undefined ||  this.DC == null )
    {
      this.commonprovider.FailedToast('Type DC No.')
    }
    else if( this.VehNo== "" ||  this.VehNo == undefined ||  this.VehNo == null )
    {
      this.commonprovider.FailedToast('Type Vehicle No')
    }
    else if(  this.InTime== "" ||  this.InTime == undefined ||  this.InTime == null )
    {
      this.commonprovider.FailedToast('select Time')
    }
    else if( this.GatePass== "" ||  this.GatePass == undefined ||  this.GatePass == null )
    {
      this.commonprovider.FailedToast('select Gatepass No')
    }
    else if( this.DriverName== "" ||  this.DriverName == undefined ||  this.DriverName == null )
    {
      this.commonprovider.FailedToast('select DriverName')
    }
    else
    {
    var req = {
      company: this.Company,
      partycode:this.PartyCode,
      year: this.year,
      orderno:  this.ordr,
      wrkorder: this.wrkord
  };
  this.commonprovider.WvgReceiptGrid(req).then((result) => {
    var res: any;
    res = result;
    this.GridDetailsLoad = res;
    console.log('griddddddd',this.GridDetailsLoad)
    console.log('re',this.GridDetailsLoad[0].Beam_No)
  })
 
}
  setTimeout (() => {
   this.PcsNoLoad();
   this.barNoLoad();
 }, 1000);
  
 }
 
 PcsNoLoad() {
  var req = {
    company: this.Company,
    yr: this.year,
 
};
this.commonprovider.WvgReceiptPcsNo(req).then((result) => {
  var res: any;
  res = result;
  this.pcsno = res;
  // console.log('er',this.pcsno[0].Current_No1)
  // console.log('barcode', this.pcsno[1].barcodeno)
  for(var i = 0 ; i < this.pcsno.length; i++)
  {
     this.Current_No1 =  this.pcsno[i].Current_No1;
  }
 console.log(  this.Current_No1)
})
}
barNoLoad() {
  var req = {
    company: this.Company,
    yr: this.year,
 
};
this.commonprovider.WvgReceiptbarNo(req).then((result) => {
  var res: any;
  res = result;
  this.barno = res;
 
  for(var i = 0 ; i <   this.barno.length; i++)
  {
     this.barcode =    this.barno[i].barcodeno;
  }
 console.log( this.barcode)
})
}
 clear()
 { 
 
  this.PartyNamel="";
  this.WorkOrder= "";
  this.OrderNumber = "";
  this.DC= "";
  this.VehNo="";
  this.DriverName = "";
  this.GatePass = "";
 
  this.GridDetailsLoad=[];
  this.entryno ='';
  this.count = '0';
}
  ngOnInit() {
  }
  // Mtrchange()
  // {
   

  // }
  SaveLoad() {
    console.log('RECWGT',)
    this.isButton = !this.isButton;
    for(var i = 0 ; i <  this.Selectedlistarr.length ;i++)
    {
    var req = {
      company: this.Company,
      date:moment(new Date()).format('YYYY-MM-DD'),
      yr: this.year,
      warehouse:this.Warehouse,
      vendorname:  this.supllier,
      partycode:this.PartyCode,
      orderno:  this.ordr,
      workorderno: this.wrkord,
      Silpno:this.DC,
      slipdate:moment(new Date()).format('YYYY-MM-DD'),
      //recid:this.Selectedlistarr[i].
      recpcs:'1',
      recqty:this.Mtr,
      recunit:this.Selectedlistarr[i].Rate_Unit,
      recwgt:'0',
      remarks:'-',
      allotfabid:this.Selectedlistarr[i].Allot_Fab_id ,
      wvgordid:this.Selectedlistarr[i].Wvg_Ord_id     ,
      saveuser:this.UserName + '//'+ 'MOBILEAPP' + '//' + moment(new Date()).format('YYYY-MM-DD') ,
      amount:Number(this.Selectedlistarr[i].rate) * Number(this.Mtr),
      vehicleno:this.VehNo,
      intime:this.InTime,
      driver:this.DriverName,
      gatepassno:this.GatePass,
      shadeno:'0',
      loomno:'1',
      recproduct:this.Selectedlistarr[i].Product  ,
      width:this.Selectedlistarr[i].F_Width ,
      length:this.Selectedlistarr[i].F_Length,
      size:this.Selectedlistarr[i].F_Size  ,
      reccolor:this.Selectedlistarr[i].Color ,
      recdesign:this.Selectedlistarr[i].Design_Name ,
      alias:this.Selectedlistarr[i].Alias_name ,
      reccount:this.Selectedlistarr[i].F_Count,
      reedpick:this.Selectedlistarr[i].Reed_Pick ,
      pcsno: this.Current_No1,
      rate:this.Selectedlistarr[i].rate, 
      rateunit:this.Selectedlistarr[i].Rate_Unit,
      totamt:Number(this.Selectedlistarr[i].rate) * Number(this.Mtr),
      baleno:this.BaleNo,
      barcode:this.barcode,
      leftno:'0',
      reason:this.Reasonn,
      setno:this.WeavingReceipt.value.Set,
      beamno:this.WeavingReceipt.value.Beam,
      conrecqty:this.Mtr,
      recwages:'0',
      branch:this.Branch,
      itemQty:'0',
      items:'0',
      nos:'0',
      entryno: this.entryno,
      count:this.count
  };
}
  this.commonprovider.WvgReceiptSave(req).then((result) => {
    var res: any;
    res = result;
    this.save = res;
    if(this.entryno == "" || this.entryno == null || this.entryno == undefined)
   {
    console.log('entryno',  this.save[0].entry_no)
    this.entryno =  this.save[0].entry_no;
  }
 alert("Record Saved Sucessfully"  + '-'+  this.entryno)
 for(var i = 0 ; i < this.save.length; i++)
 {
 console.log('countttttttttt',this.save[i].count)
 this.count = this.save[i].count
console.log('COUNTTT',this.count)
 }
 this.GridDetailLoad();
 this.Mtr="";
  })

 }     
 
}

