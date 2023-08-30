 

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../abi/common.service';

@Component({
  selector: 'app-openformcard',
  templateUrl: './openformcard.page.html',
  styleUrls: ['./openformcard.page.scss'],
})
export class OpenformcardPage implements OnInit {

  SpaceBarApply: any;
  Company=localStorage.getItem("Company");
  Branch=localStorage.getItem("Branch");
  year = localStorage.getItem('Year');
  Exper = localStorage.getItem('Ex_Per');
  bal = localStorage.getItem('Bal');
  CompanyId = localStorage.getItem('CompanyId');
  YRECID = localStorage.getItem('Y_Rec_Id')

  wt = "";
  Cones = "";
  //Single = localStorage.getItem('Single');
  Pack = localStorage.getItem('Pack');
  NRCQty = localStorage.getItem('Received');
  Ordered = localStorage.getItem('Order') ;
  WorkOrder: any;
  BagDetailsForm: any;
  BagDetails: any;
  LotNo = localStorage.getItem('LotNo') 
  LotNo1: any;
  lotarr:any
  lotnumber=[];
  Lotno2: any;
 // NowQty1 = localStorage.getItem('Now_Received_Qty') ;
 // NowQty : any;
  Qty = localStorage.getItem('NRCQty');
  wtpack: any;
  singlecone: any;
  Count: string;
  OrderEX : number ;
  Balnc: number;
  orderEXbal: string;
  orderEXbal1: any;
  orderEXbal2: string;
  BalEXqty: number;
  Maximum: number;
  Single_Pack_Wt: any;
  Single: any;
  GridDetailsLoad :any;
  Packtype: any;
  PacktypeINT: number;
  tonumberFloat: any;
  num: any;
  TotalPack: number;
  TotalConeWt: any;
  Conesweight: any;
  SinglePackConeWeight: any;
  totalOverallweight: any;
  PackNoLoadlist : any;
  newStr: string;
  CurrentNo: any;
  CurrentPackNO: any;
  ConeCurrentNo: string;
  CurrentPackNOLoad: any;
  CurrentConePackNo: number;
  Selectedlistarr: any[];
  selectedArr: any[];
  selected: string;
  totalcalculation: any ;
  Totalpacklist: any;
  TotalConelist:any;
  SinglePackWt: number;
  NowQty: string;
  isModalOpen: boolean;
  selectArray : any;
  PackType: any;
  
   
 
  constructor( 
  private commonprovider: CommonService,
  private _BG: FormBuilder,
  private router: Router,
  private route: ActivatedRoute,
)
{
  this.BagDetailsForm = this._BG.group({
   
    LotNo: ["", [Validators.required]], 
    wt:["",[Validators.required]],
    Single:["",[Validators.required]],
    NowQty:["",[Validators.required]],
    Cones:["",[Validators.required]],
    Pack:["",[Validators.required]],
   });  
 this.  spaceGridDetailsLoad();
 this.selectArray =  JSON.parse(localStorage.getItem ('SelectArray'));
 console.log( this.selectArray );
 for(var  i = 0 ; i < this.selectArray.length; i++ )
 {
this.PackType =  this.selectArray[i].Pack_Type;
 
console.log('PACKK',this.PackType)
  }
  this.Totalpacklist =[]
  this.TotalConelist= []
}
  spaceGridDetailsLoad() {
  

    var req = {
      Company: this.Company,
      Years:this.year,
      Y_Rec_Id : this.YRECID
        };
    this.commonprovider.WsYarnReceiptGridDetails(req).then((result) => {
      this.GridDetailsLoad = result;
      for( var i = 0 ; i <  this.GridDetailsLoad .length ; i ++)
      {
      console.log ('Totallll',Number(this.GridDetailsLoad[i].Pack_Wgt) )
      }
      console.log('GridDetailsLoad22', this.GridDetailsLoad);
      return true;
    });
  }
  
 

 itemClick(d, index) {
  this.Selectedlistarr = []
  this.selected= "true"
   var item = d.selected;
   console.log('itt',d.selected)
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
 console.log('orderrrrrrrrrrrr',this.Selectedlistarr[i].Ordered)
  
}
 
}
  Add()
  {
   
      this.spaceGridDetailsLoad();
    console.log('Qty',this.NowQty)
    this.Lotno2=this.BagDetailsForm.value.LotNo
    // if(this.BagDetailsForm.value.LotNo == "" || this.BagDetailsForm.value.LotNo == null || this.BagDetailsForm.value.LotNo == undefined || this.BagDetailsForm.value.LotNo == "0" )
    // {
    // alert("Enter Vaild Lotno")
    // }
      if(this.wt == "" || this.wt  == null || this.wt  == undefined || this.wt  == "0" )
    {
    alert("Enter Vaild Cone weight")
    }
    else if(this.Cones == "" || this.Cones  == null || this.Cones  == undefined || this.Cones  == "0" )
    {
    alert("Enter Vaild Cone Weight")
    }
    // else if(this.Pack == "" || this.Pack  == null || this.Pack  == undefined   )
    // {
    // alert("Enter Vaild Cone Weight")
    // }
    else{
      this.lotnumber.push(this.Lotno2)&&(this.NowQty)&&(this.wtpack)&&(this.Cones)&&(this.Single)&&( this.Pack) &&( this.PacktypeINT)
      console.log('Workkkkkkkkkkkkkkkkkkkk',this.lotnumber);
    }
   
   if(this.PacktypeINT != 0)
   {

    console.log('tytyt')
     }  }
   onchangewt()
   {
    this.Single =(Number(this.wt ) / Number(this.Cones))
    console.log('work',this.Single)
   }
   Save(a){
 
    console.log('Qty',a)
    localStorage.setItem("NowQty",this.NowQty)
    localStorage.setItem("LotnoLoad",this.LotNo)
    localStorage.setItem("wtpack",this.wt)
    localStorage.setItem("Cones",this.Cones)
    localStorage.setItem("SingleConeWeight",this.Single)
    localStorage.setItem("Totalpacklist", JSON.stringify(this.Totalpacklist));
    localStorage.setItem("TotalConelist", JSON.stringify(this.TotalConelist ));
    localStorage.setItem("Count",this.Count);
    localStorage.setItem("CurrentPackNo",this.CurrentPackNOLoad )
    console.log('TotalConelist',this.TotalConelist)
    console.log('otalpacklist',this.Totalpacklist)
    this.router.navigate(['/openformcard'])
  }
 
  ngOnInit() {
  }
  calculate(){
    this.Selectedlistarr = [
      {
     "PacktypeINT" : parseInt(this.Packtype)
      }
    ]
    console.log( 'arrayyyy',this.Selectedlistarr)
  // this.PackNoLoad() 
  
   // console.log('packkkkkkkkkkkkkkkkkkkkkkk',this.CompanyId +  this.newStr +  this.CurrentNo )
  
   this.CurrentPackNO = this.CompanyId +  this.newStr +  this.CurrentNo
   this.CurrentPackNOLoad =   this.CurrentPackNO 
   console.log('',this.Ordered)
   this.OrderEX =  (parseFloat(this.Ordered) * Number (this.Exper) / 100);
   console.log ( this.OrderEX)
   console.log('ORDEREX', this.OrderEX )
   this.orderEXbal1 = (parseFloat (this.Ordered)) + (this.OrderEX)
   console.log('OrderEX&&&&&&&&&&&&&&',  (parseFloat (this.Ordered)) + (this.OrderEX));
   this.Balnc =(Number(this.Ordered)) - Number (this.NRCQty)
   this.BalEXqty = Number (this.orderEXbal1) - (Number(this.Ordered)) 
   this.Maximum = Number (this.NRCQty) - (Number(this.orderEXbal1))
   console.log('Order', this.BalEXqty)
   console.log('EXITQTYYYY',this.NowQty);
   console.log('WTPACK',this.wt)
  console.log('Packtype',Number(this.NowQty) / Number (this.wt));
     this.Packtype = ((Number(this.NowQty)) / Number (this.wt))
    this.PacktypeINT = parseInt(this.Packtype)
  // this.Packtype = isInteger(this.Packtype);
    console.log('itworkkkkkkkkkkkkkk',  this.PacktypeINT);
  
  this.num=this.Packtype;
 var str= this.num.toString();
   var numarray=str.split('.');
  var a=new Array();
   a=numarray;
   this.tonumberFloat = a[1]
    console.log('NUMBER',String (this.tonumberFloat)[0])
  console.log(a[1])
   this.TotalPack = this.PacktypeINT * Number (this.wt);
    console.log( 'TOTALPACKWEIGHT',this.PacktypeINT * Number (this.wt));
      this.SinglePackWt = Number (this.TotalPack) / Number (this.PacktypeINT)
      console.log('SINGLEPAXKWEIGHT',this.SinglePackWt )
     this.TotalConeWt =  Number (this.NowQty) - this.TotalPack 
     console.log( 'TotalSinglecOUNT',this.TotalConeWt);
    this.Conesweight =  this.TotalConeWt /  this.Single 
     this.Conesweight = parseInt (this.Conesweight)
   console.log( 'TotalSingleCONEWEIGHT', this.Conesweight);
    console.log('TotalSinleYYYYYYYYYYYY',this.Single)
   this.SinglePackConeWeight = Number( this.Single )*  Number( this.Conesweight) 
   console.log('TOTALPACKKKKKKK',   this.SinglePackConeWeight )
  this.totalOverallweight = this.TotalPack + this.SinglePackConeWeight
     
    this.Totalpacklist =[
      {
        "CurrentPackNO" :this.CurrentPackNO ,
       "OrderEX": this.OrderEX,
       "Pack_Type": this.Packtype,
       "PacktypeINT": this.PacktypeINT ,
       "TotalPack": this.TotalPack ,
       "CurrentConePackNo": this.CurrentConePackNo,
       "ConePerPack":this.TotalConeWt,
       "wt": this.SinglePackWt ,
       "NoConePack": this.Cones,
       "SingleCone":this.Single,
       "SinglePackWt":this.SinglePackWt 
   
      }
  
  
     ]
     console.log(this. Totalpacklist)
     this.TotalConelist =[
      {
        "CurrentPackNO" :this.CurrentPackNOLoad++,
       "OrderEX": this.OrderEX ,
       "PacktypeCone": this.Packtype,
       "PacktypeINTCone": this.PacktypeINT ,
       "TotalPackCONE":  this.SinglePackConeWeight ,
        "CurrentConePackNo": this.CurrentConePackNo,
        "ConePerPackCone":"1",
        "SinglePackWtCONE":this.SinglePackConeWeight ,
        "NoConePackcoNE": this.Conesweight,
       "TotalPackCone" : this.NowQty
      
      
      }
     ]
   console.log('PACKLIST',this.Totalpacklist )
  
   console.log('WORK',this.totalcalculation)
  }
  Back()
  { 
    localStorage.setItem('Totalpacklist',JSON.stringify(this.Totalpacklist) )
    localStorage.setItem('TotalConelist',JSON.stringify(this.TotalConelist) )
  this.router.navigate(['/receipt-open-form-edit']);
 
  }
}