import { Component, OnInit } from '@angular/core';
import { CommonService } from '../abi/common.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';
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
  selector: 'app-fabricreceipt',
  templateUrl: './fabricreceipt.page.html',
  styleUrls: ['./fabricreceipt.page.scss'],
})
export class FabricreceiptPage implements OnInit {

  FGReceipt: any;
  OrderType:any="Export";
  Sample:any="Bulk";
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
  Ord="WITHOUT YARN ISSUE";
  type:any=[{id:1,typ:"Export"},{id:2,typ:"Local"},{id:1,typ:"Is"}]
  Sampleload:any=[{id:1,sample:"Sample"},{id:2,sample:"Bulk"}]
  ordertype:any=[{id:1,typ:"WITHOUT YARN ISSUE"},{id:2,typ:"WARP AND WEFT ISSUE"},{id:1,typ:"SIZED  BEAM & WEFT YARN"}]
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
  PoNumber:any;
  isButton:boolean=true;
PurchaseReceipt:  any;
  po: any;
  Featuresettings: unknown;
  yarnseetings: any;
  GatepassNumLoad: any ;
  constructor(private commonprovider: CommonService, 
    private _rr: FormBuilder,   public httpClient: HttpClient,
    public router: Router) {
       this.PurchaseReceipt =   this._rr.group({
      Warehouse:["",[Validators.required]],
      Dc:["",[Validators.required]], OrderType:["",[Validators.required]], Sample:["",[Validators.required]],
      Gatepass:["",[Validators.required]],PoNumber:["",[Validators.required]], WorkOrder:["",[Validators.required]],PartyName:["",[Validators.required]],Weight:["",[Validators.required]],Qty:["",[Validators.required]],Ord:["",[Validators.required]]  })
      
 this.WareHouseNameLoad();
 this.PartyNameLoad();
    }
    portChanges(event: { component: IonicSelectableComponent; value: any }) {
    
      console.log('port:', event.value.PartyName);
      this.supllier = event.value.PartyName
      this.BuyerId = event.value.Buyer_id 
      this.PartyCode = event.value.PartyCode 
      this.OrderNumberLoad();
    
      var req = {
        company: this.Company,
        statement: 'FeaturSettings',
       
      };
      this.commonprovider.GetWareHouseNameLoad(req).then((result) => {
        this.Featuresettings = result;
        console.log('Featuresettings ',  this.Featuresettings[0].fabric );
        this.yarnseetings  = this.Featuresettings[0].fabric 
        return true;
      });
    
    }
    WorkOrders(event: { component: IonicSelectableComponent; value: any }) {
        
      console.log('tttttt:', event.value.WorkOrder);
      this.WrkOrderNumber = event.value.WorkOrder
      this.po = event.value.ponum
      console.log( this.po)
      this.GatePassNumberLoad();
      }
      BACK()
      {
        this.router.navigate(['./home'])
      }
    OrderNumberLoad()  {
      var req = {
      Company: this.Company,
      statement: 'FABRICRECEIPT',
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
          ponum: element.Yarn_Po_No,
          WorkOrder:element.WORKORER
           
        };
        this.Workordr.push(req_name);
      }
    console.log('RouteList',  this.Workordr);
    });
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
     PartyNameLoad() {
      var req = {
      Company: this.Company,
      Years:this.year,  
      processNameload:"FABRICRECEIPT"
  
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
    AddButoon()
    {
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
        this.commonprovider.FailedToast('Type DC No.')
      } 
      else if( this.Gatepass == "" || this.Gatepass == undefined)
      {
        this.commonprovider.FailedToast('Gatepass No')
      } 
      else{
      var req = {
         partyname:  this.supllier,
         company:this.Company,
         orderno: this.po,
         statement : "FABRICRECEIPT",
         year: this.year
      };
      this.commonprovider.FGReceiptgridload(req).then((result) => {
        var res: any;
        res = result;
        this.receiptgrid = res;
        console.log('GRIDD')
      });
     }
    }
    itemClick(jw:any,index:any)
    {
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
       }
       localStorage.setItem('FabricselectGrid',this.selectedArr)
       localStorage.setItem('FabricselectGrid',JSON.stringify(this.selectedArr))
       localStorage.setItem('fabricDCno', (this.DC))
       localStorage.setItem('fabricsuppliername', (this.supllier))
       localStorage.setItem('fabricPartyCode', ( this.PartyCode))
       localStorage.setItem('fabricBuyerId', this.BuyerId)
       localStorage.setItem('fabricGatepassno', this.Gatepass)
       localStorage.setItem('fabricPoNumSTORE',this.PoNumber )
       localStorage.setItem('fabricOrdertype',this.Ord )
       localStorage.setItem('fabricSamplebulk',this.Sample )
       localStorage.setItem('ordertype',this.OrderType )
       localStorage.setItem('Fabricwarehouse',this.Warehousename )
       this.router.navigate(['fabricreceiptsave'])
    }
    Clear()
    {
      this.Gatepass = "";
      this.DC = "";
      this.WorkOrder  = "";
      this.PartyName ="";
       this.PoNumber = "";
       this.receiptgrid  = []
    }
  ngOnInit() {
  }
  GatePassNumberLoad() {
    var req = {
      Company: this.Company,
      Years: this.year,
      Order_No:  this.po ,
      Party_Name:   this.supllier,
      statement : 'Receipt'
     
      };
    this.commonprovider.GetGatepassNo(req).then((result) => {
      this.GatepassNumLoad = result;
      console.log('GatepassNumLoad', this.GatepassNumLoad);
        return true;
    });
   
    // if(this.yarnseetings == 'True' && this.GatepassNumLoad.length == '')
    // {
    //   alert("Gate Pass No. Required")
    // }
  }
}
