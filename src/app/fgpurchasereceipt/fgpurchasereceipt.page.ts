import { Component, OnInit, Type } from '@angular/core';
import { CommonService } from '../abi/common.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
import * as moment from 'moment';
class Workordr
{
  public id!: number;
  public WorkOrder!: string;
}
class PartyNameIns {
  public id!: number;
  public PartyName!: string;
}
@Component({
  selector: 'app-fgpurchasereceipt',
  templateUrl: './fgpurchasereceipt.page.html',
  styleUrls: ['./fgpurchasereceipt.page.scss'],
})
export class FgpurchasereceiptPage implements OnInit {
  FGReceipt: any;
  OrderType:any="Bulk";
  Sample:any;
  PartyName:any;
  Workordr!: Workordr[];
  WorkOrder:any;
  PartyNameIns!: PartyNameIns[]  ; 
  DC:any;
  Gatepass:any;
  Company = localStorage.getItem('Company');
  Branch = localStorage.getItem('Branch');
  year = localStorage.getItem('Year'); 
  UserName = localStorage.getItem('User');
  Warehousename:any;
  WH: any;
  type:any=[{id:1,typ:"Export"},{id:2,typ:"Local"},{id:1,typ:"Is"}]
  Sampleload:any=[{id:1,sample:"Sample"},{id:2,sample:"Bulk"}]
  WrkOrderNumber: any;
  supllier: any;
  BuyerId: any;
  PartyCode: any;
  receiptgrid: any;
  Selectedlistarr: any;
  Qty:any;
  Weight:any;
  EntryNo: string;
  selectedArr: any =[];
  totalconversion: any;
  newIndex: number;
  Saveload: any;
  isButton:boolean=true;
  constructor(private commonprovider: CommonService, 
    private _rr: FormBuilder,   public httpClient: HttpClient,
    public router: Router) {
       this.FGReceipt =   this._rr.group({
      Warehouse:["",[Validators.required]],
      Dc:["",[Validators.required]], OrderType:["",[Validators.required]], Sample:["",[Validators.required]],
      Gatepass:["",[Validators.required]], WorkOrder:["",[Validators.required]],PartyName:["",[Validators.required]],Weight:["",[Validators.required]],Qty:["",[Validators.required]] })
      this.WareHouseNameLoad();
      this. PartyNameLoad()
 
    }
    async Save() {
       for(const itemsload of this.selectedArr)
   
       var req = {
        ActRecWt:itemsload.Weight_Per_UOM,
        Company:this.Company,
        Dcno:this.DC,
        LeeTime:itemsload.leetime,
        Ordertype:this.OrderType,
        Ordmainid:itemsload.Order_Main_Id,
        RecAmt:parseFloat(itemsload.NowRec) * parseFloat(itemsload.Orderd_Purchase_Rate),
        RecQty:itemsload.NowRec,
        Rate:itemsload.Orderd_Purchase_Rate,
        Stkpur:itemsload.Stk_Pur,
        Warehouse:this.Warehousename,
        articleno:itemsload.articleno,
        barcode:itemsload.Barcode_No,
        branch:this.Branch,
        date:moment(new Date()).format('YYYY-MM-DD'),
        entryno:this.EntryNo,
        gatepassno:this.Gatepass,
        nos:itemsload.length,
        orddetid:itemsload.orderdetailid,
        ordid:itemsload.Order_Id,
        ordno:this.WrkOrderNumber ,
        ordrate:moment(itemsload.Date).format('YYYY-MM-DD'),
        partycode:this.PartyCode,
        partyname: this.supllier ,
        productNoID:itemsload.ProductNo_Id,
        purchasename:itemsload.purchasename,
        remarke:'-',
        samplebulk:this.Sample,
        saveuser:this.UserName,
        totalrecamt:parseFloat(itemsload.NowRec) * parseFloat(itemsload.Orderd_Purchase_Rate),
        unit:itemsload.uom,
        workorderno:itemsload.workorderno,
        years:this.year
 
      };
     
      const result = await  this.commonprovider.FGReceiptsave(req)
     this.Save = result;
        console.log('SAVE',  this.Saveload );
        if(this.EntryNo == null || this.EntryNo == undefined || this.EntryNo =="")
        {
       for(var i =  0 ; i < this.Save.length ; i++)
       {
        this.EntryNo = this.Save[i].entry_no;
       }
    }
  } 
       
    
    PartyNameLoad() {
      var req = {
      Company: this.Company,
      Years:this.year,  
      processNameload:"FGRECEIPT"
  
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
          Buyer_id:element.Sup_Id
  
          };
        this.PartyNameIns.push(req_name);
      }
  console.log('PartyNames',  this.PartyNameIns);
    });
  }
    OrderNumberLoad()  {
      var req = {
      Company: this.Company,
      statement: 'FGRECEIPT',
      Years: this.year,
      partyCode:this.PartyCode,
      Supplier_Name:  this.supllier,
      vendorid : this.BuyerId ,
      ordertype:this.OrderType,
      samplebulk:this.Sample
   
    };
    this.commonprovider.GetOrderNumberLoad(req).then((result) => {
      var res: any;
      res = result;
      this.Workordr = res;
        this.Workordr = [];
        for (let index = 0; index < res.length; index++) {
        const element = res[index];
        let req_name = {
          id: index + 1,
          WorkOrder: element.Yarn_Po_No,
           
        };
        this.Workordr.push(req_name);
      }
    console.log('RouteList',  this.Workordr);
    });
    }
    WorkOrders(event: { component: IonicSelectableComponent; value: any }) {
        
      console.log('tttttt:', event.value.WorkOrder);
      this.WrkOrderNumber = event.value.WorkOrder
     
      }
      portChanges(event: { component: IonicSelectableComponent; value: any }) {
    
        console.log('port:', event.value.PartyName);
        this.supllier = event.value.PartyName
        this.BuyerId = event.value.Buyer_id 
        this.PartyCode = event.value.PartyCode 
        this.OrderNumberLoad()
      
      }
    WareHouseNameLoad() {
      var req = {
        company: this.Company,
        Branch_Name: this.Branch,
        statement: 'WeavingFirstPices',
        UserName:this.UserName
      };
      this.commonprovider.GetWareHouseNameLoad(req).then((result) => {
        this.WH = result;
        console.log('WareHouseName', this.WH);
        return true;
      });
     }
     AddButoon()
     {
      // var reqQ = {
      //   Company: this.Company,
      //   statement: 'FPICHECK',
      //   Years: this.year,
      //   buyerid : this.BuyerId ,
      //   order:this.WrkOrderNumber
      // };
      // this.commonprovider.GetOrderNumberLoad(reqQ).then((result) => {
      //   var res: any;
      //   res = result;
      //   this.Fpicheck = result;
      // })
      
      // for( var i = 0 ; i <this.Fpicheck.length ; i++)
      // {
      //   this.FPICHECK = this.Fpicheck[i].Yarn_Po_No
      // }
      // console.log(this.FPICHECK)
    
        if(this.Warehousename == null ||  this.Warehousename == undefined)
      {
        this.commonprovider.FailedToast('Select Warehouse')
      } 
      else if( this.PartyName == "" || this.PartyName == undefined)
      {
        this.commonprovider.FailedToast('Select Supplier Name')
      } 
      else if( this.WorkOrder == "" || this.WorkOrder == undefined)
      {
        this.commonprovider.FailedToast('Select Order')
      } 
      else if( this.DC == "" || this.DC == undefined)
      {
        this.commonprovider.FailedToast('Type Dc No')
      } 
      else if( this.Gatepass == "" || this.Gatepass == undefined)
      {
        this.commonprovider.FailedToast('Gatepass No')
      } 
      else{
      var req = {
        partyname:  this.supllier,
         ponumber:this.WrkOrderNumber
      };
      this.commonprovider.FGReceiptgridload(req).then((result) => {
        var res: any;
        res = result;
        this.receiptgrid = res;
        console.log('GRIDD')
      });
     }
    }
    itemClick(jw: any, index: any) {
      {
        console.log('MY INDEX POSSITION',index)
  
        var item = jw.selected;
        if (item == true) {
          jw["selected"] = false;
          this.selectedArr.splice(index, 1);
         
        } else {
          jw["selected"] = true;
          this.selectedArr.push(jw);
          this.totalconversion = jw;
        }
        console.log('SELECT ARRARYYYYYY',this.selectedArr);
       this.newIndex = this.selectedArr.length -1;
       this.selectedArr[this.newIndex].NowRec = this.FGReceipt.value.Qty ;
       this.selectedArr[this.newIndex].NowRecWgt =this.FGReceipt.value.Weight 
   } 
 
    }
     Clear()
     {
      this.PartyName="";
      this.WorkOrder="";
      this.DC="";
      this.Gatepass="";
     }
  ngOnInit() {
  }

}
