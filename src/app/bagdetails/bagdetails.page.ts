import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../abi/common.service';

@Component({
  selector: 'app-bagdetails',
  templateUrl: './bagdetails.page.html',
  styleUrls: ['./bagdetails.page.scss'],
})
export class BagdetailsPage implements OnInit {
  SpaceBarApply: any;
  Company=localStorage.getItem("Company");
  Branch=localStorage.getItem("Branch");
  year = localStorage.getItem('Year');
  Exper = localStorage.getItem('Ex_Per');
  NowQty = localStorage.getItem('Bal').toString().match(/^-?\d+(?:\.\d{0,1})?/)[0];
  bal = localStorage.getItem('Bal');
  CompanyId = localStorage.getItem('CompanyId');
  wt = localStorage.getItem('Bag_Wt').toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]; 
  Cones = localStorage.getItem('Cones')
  Count1 = localStorage.getItem('Count')
  Color = localStorage.getItem('Color') 
  //Single = localStorage.getItem('Single');
  Pack = localStorage.getItem('Pack');
  NRCQty = localStorage.getItem('Received');
  Ordered = localStorage.getItem('Order') ;
  WorkOrder: any;
  BagDetailsForm: any;
  BagDetails: any;
  LotNo :any; 
  LotNo1: any;
  lotarr:any
  lotnumber=[];
  Lotno2: any;
 
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
  NoOfPacks: number;
  ConeNumber: string;
  add: number;
  totalOverallweight1: any;
  SinglePointtype: number;
  
   
 
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
    Pack:["",[Validators.required]]
   
   });  
   this.PackNoLoad();
   this.Single =(Number(this.wt ) / Number(this.Cones)).toFixed(3);

   console.log('  CompanyId',this.  CompanyId)
   var str=this.year
 this.newStr = str.replace(/-/g, "");
  console.log('Year',1+this.newStr)
  this.OrderEX =  (parseFloat(this.Ordered) * Number (this.Exper) / 100);
  console.log ( this.OrderEX)
  console.log('ORDEREX', this.OrderEX )
  this.orderEXbal1 = (parseFloat (this.Ordered)) + (this.OrderEX)
}

calculate(){
// this.PackNoLoad() 

  console.log('packkkkkkkkkkkkkkkkkkkkkkk',this.CompanyId +  this.newStr +  this.CurrentNo )

  this.CurrentPackNO = this.CompanyId +  this.newStr +  this.CurrentNo
  this.CurrentPackNOLoad =   this.CurrentPackNO 
  console.log('',this.Ordered)

  this.Balnc =(Number(this.Ordered)) - Number (this.NRCQty)
  this.BalEXqty = Number (this.orderEXbal1) - (Number(this.Ordered)) 
  this.Maximum = Number (this.NRCQty) - (Number(this.orderEXbal1))
  console.log('Order', this.BalEXqty)
  console.log('EXITQTYYYY',this.NowQty);
  console.log('WTPACK',this.wt)
  console.log('Packtype',Number(this.NowQty) / Number (this.wt));
  this.Packtype = ((Number(this.NowQty)) / Number (this.wt))
  this.PacktypeINT = parseInt(this.Packtype);
  this.NoOfPacks = this.PacktypeINT + Number(1)
  //this.Packtype = isInteger(this.Packtype);
  console.log('itworkkkkkkkkkkkkkk',  this.PacktypeINT);

  this.num=this.Packtype;
  var str= this.num.toString();
  var numarray=str.split('.');
  var a=new Array();
  a=numarray;
  this.tonumberFloat = a[1]
  console.log('NUMBER',String (this.tonumberFloat)[0])
   console.log(a[1])
   this.SinglePointtype =  this.Single * Number (this.Cones )
   this.TotalPack = this.PacktypeINT * Number (this.wt);
   console.log( 'TOTALPACKWEIGHT',this.PacktypeINT * Number (this.wt));
    this.SinglePackWt = Number (this.TotalPack) / Number (this.PacktypeINT)
    console.log('SINGLEPAXKWEIGHT',this.SinglePackWt )
   
   this.TotalConeWt =   Number (this.NowQty) - this.TotalPack 
   console.log( 'TotalSinglecOUNT',this.TotalConeWt);
 
   this.Conesweight = (this.TotalConeWt) /  Number(this.Single)
   console.log('23232323',this.Conesweight )
   
   this.Conesweight = parseInt (this.Conesweight)
   console.log( 'TotalSingleCONEWEIGHT', this.Conesweight);
   console.log('TotalSinleYYYYYYYYYYYY',this.Single)
  // if( this.NowQty >  this.SinglePackConeWeight + this.TotalPack)
  // {
   console.log('WORK')
   this.SinglePackConeWeight = Number( this.Single )*  Number( this.Conesweight) 
  console.log('TOTALP',   this.SinglePackConeWeight )
  // }
  //  else
  //  {
  //   this.Conesweight--;

  //   console.log('NOTWORK', this.Conesweight)
  //   this.SinglePackConeWeight =Number( this.Single ) *  Number( this.Conesweight) 
  //   console.log('TOTALPACKKKKKKK',   this.SinglePackConeWeight )
  //  }
  if(this.Single  > this.TotalConeWt)
  {
    this.totalOverallweight = this.TotalPack  
    this.Conesweight = '0'
     
  }
  else{
    this.totalOverallweight = this.TotalPack + this.SinglePackConeWeight
  
  }
 
  this.TotalpackNo();
  this.Totalpacklist =[
    {
      "CurrentPackNO" :this.CurrentPackNO ,
     "OrderEX": this.OrderEX ,
     "Packtype": this.Packtype,
     "PacktypeINT": this.PacktypeINT ,
     "TotalPack": this.TotalPack ,
     "CurrentConePackNo": this.CurrentConePackNo,
     "ConePerPack":this.TotalConeWt,
     "SinglePackWt": this.SinglePackWt ,
     "wt":this.wt,
     "NoConePack": this.Cones
 
    }
   ]
   this.TotalConelist =[
    {
      "CurrentPackNO" :this.CurrentPackNOLoad++,
     "OrderEX": this.OrderEX ,
     "Packtype": this.Packtype,
     "PacktypeINT": this.PacktypeINT ,
     "TotalPack":  this.SinglePackConeWeight ,
      "CurrentConePackNo": this.CurrentConePackNo,
      "ConePerPack":"1",
      "SinglePackWt":this.SinglePackConeWeight ,
      "NoConePack": this.Conesweight
    
    
    }
   ]
 console.log('PACKLIST',this.Totalpacklist )

 console.log('WORK',this.totalcalculation)
}

TotalpackNo()
 {
 if (this.TotalConeWt != 0 ) {
   this.CurrentConePackNo=this.CurrentPackNOLoad++;
   console.log('packno',   this.CurrentConePackNo)
 }
 }
QtyChange(event){

 this.OrderEX =  (parseFloat(this.Ordered) * Number (this.Exper) / 100);
  console.log ( this.OrderEX)
  console.log('ORDEREX', this.OrderEX )
  this.orderEXbal1 = (parseFloat (this.Ordered)) + (this.OrderEX)
  console.log('Ordered',this.Ordered)
console.log('Qty',this.NowQty)
console.log('ALRECQTY',   this.NRCQty)
console.log('EXITQTY',this.orderEXbal1)
console.log('EXITQTYYYY',(Number(this.NowQty) + Number (this.NRCQty )))

  // if(this.Ordered > this.orderEXbal1)
  // {
  //   console.log('NOT EXIT')
  // }
    if(this.orderEXbal1 < (Number(this.NowQty) + Number (this.NRCQty ))  ) 
 {
  alert('Value Exit the Order Qty');
  this.NowQty = ''
   }
 
}
  SpaceBarDetailsLoad()
  {
   var req = {
    Company:this.Company,
    Years:this.year,
    Y_Rec_No:"",
    Lot_No:this.BagDetailsForm.value.LotNo,
    Workorderno:this.WorkOrder,
    Pack_Type:"",
    Pack_No:"",
    cone_wt:"",
    cones_per_bag:"",
    Pack_Wgt:this.BagDetailsForm.value.wt,
    Save_User:"",
    Y_Rec_Id:"",
    Y_Rec_Det_Id:"",
    Rec_RetRec:"",
    y_ret_id:"",
    y_ret_det_id:"",
    No_of_Packs:this.BagDetailsForm.value.Pack,
    Single_Pack_Wt:""

 };
    this.commonprovider.SpaceBarDetailsLoad(req).then((result) => {
      this.SpaceBarApply = result;
      console.log("OrderNumber", this.SpaceBarApply)
      return true;
    });
  }
  onchangeDate(event)
  {
 console.log('Lot',this.LotNo)
  }
  //  console.log('LotNo',this.BagDetailsForm.value.LotNo)
  //  console.log('QTY',this.BagDetailsForm.value.Qty)
  // }
  // Add()
  // {
  //   this.Qty=this.BagDetailsForm.value.Qty
  //   this.LotNo= this.BagDetailsForm.value.LotNo
  //   this.wtpack= this.BagDetailsForm.value.wt
  //   this.Cones= this.BagDetailsForm.value.Cones
  //   this.singlecone= this.BagDetailsForm.value.Single
  //   this.pack=this.BagDetailsForm.value.pack
  // }
  spaceGridDetailsLoad() {
    var req = {
      Company: this.Company,
      Years:this.year,
     
    };
    this.commonprovider.WsYarnReceiptGridDetails(req).then((result) => {
      this.GridDetailsLoad = result;
      console.log('GridDetailsLoad22', this.GridDetailsLoad);
      return true;
    });
  }
  PackNoLoad() {
    var req = {
      Company: this.Company,
      Years:this.year,
     
    };
    this.commonprovider.WsYarnReceiptPackNoLoad(req).then((result) => {
      this.PackNoLoadlist = result;
      console.log('PackNoLoadlist', this.PackNoLoadlist);
      for(var  i = 0 ; i < this.PackNoLoadlist.length ; i++)
      {
       console.log('CURRENTPACK',this.PackNoLoadlist[i].Trans_Flag)
       this.CurrentNo = this.PackNoLoadlist[i].Trans_Flag
      }
      
      return true;
    });
  }
 Edit()
 {
  this.calculate();

  console.log('Work',this.lotnumber);
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
    
    this.add = 1;
    console.log('Qty',this.NowQty)
    this.Lotno2=this.BagDetailsForm.value.LotNo
    
      if(this.NowQty == "" || this.NowQty  == null || this.NowQty  == undefined || this.NowQty  == "0" )
    {
    alert("Enter Qty")
    }
    if(this.wt == "" || this.wt  == null || this.wt  == undefined || this.wt  == "0" )
    {
    alert("Enter Vaild  Wt/Pack")
    }
    else if(this.Cones == "" || this.Cones  == null || this.Cones  == undefined || this.Cones  == "0" )
    {
    alert("Enter Vaild Cone Weight")
    }
    else if(this.LotNo == "" || this.LotNo  == null || this.LotNo  == undefined || this.LotNo  == "0" )
    {
    alert("Enter Vaild Lot Number")
    }
    // else if(this.Pack == "" || this.Pack  == null || this.Pack  == undefined   )
    // {
    // alert("Enter Vaild Cone Weight")
    // }
    else{
      this.calculate();
      this.spaceGridDetailsLoad();
    }
   
   if(this.PacktypeINT != 0)
   {

    console.log('tytyt')
     }  }
   onchangewt()
   {
    this.Single =(Number(this.wt ) / Number(this.Cones)).toFixed(5)
    console.log('work',this.Single)
   }
   Clear()
   {
    localStorage.removeItem("NowQty")
    this.NowQty='';
    this.LotNo= '';
    this.wt= '';
    this.Cones='';
    this.Totalpacklist = [];
    this.TotalConelist = [];
    this.totalOverallweight ='';

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
    localStorage.setItem("totalOverallweight", this.totalOverallweight )
    console.log('TotalConelist',this.TotalConelist)
    console.log('otalpacklist',this.Totalpacklist)
    if (this.TotalConeWt != 0 && this.Single  < this.TotalConeWt ) {
      this.ConeNumber='1'
      console.log('Coneeeeeeeee',this.ConeNumber)
    }
      else{
        this.ConeNumber = '0'
      }
     localStorage.setItem('ConeNumber',this.ConeNumber)
     console.log('ConeNumber',this.ConeNumber)
     this.router.navigate(['/yarnrecipt'])
   }
  ngOnInit() {
  }

}
