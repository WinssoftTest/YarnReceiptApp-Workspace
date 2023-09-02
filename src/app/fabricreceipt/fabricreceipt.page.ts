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
PurchaseReceipt:  any;
  constructor(private commonprovider: CommonService, 
    private _rr: FormBuilder,   public httpClient: HttpClient,
    public router: Router) {
       this.PurchaseReceipt =   this._rr.group({
      Warehouse:["",[Validators.required]],
      Dc:["",[Validators.required]], OrderType:["",[Validators.required]], Sample:["",[Validators.required]],
      Gatepass:["",[Validators.required]], WorkOrder:["",[Validators.required]],PartyName:["",[Validators.required]],Weight:["",[Validators.required]],Qty:["",[Validators.required]] })
      
 
    }
    portChanges(event: { component: IonicSelectableComponent; value: any }) {
    
      console.log('port:', event.value.PartyName);
      this.supllier = event.value.PartyName
      this.BuyerId = event.value.Buyer_id 
      this.PartyCode = event.value.PartyCode 
      this.OrderNumberLoad()
    
    }
    WorkOrders(event: { component: IonicSelectableComponent; value: any }) {
        
      console.log('tttttt:', event.value.WorkOrder);
      this.WrkOrderNumber = event.value.WorkOrder
     
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
    AddButoon()
    {

    }
    Clear()
    {
      
    }
  ngOnInit() {
  }

}
