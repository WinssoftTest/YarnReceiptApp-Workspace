import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { appsettings } from "src/app/appsettings";
import { ToastController, LoadingController } from "@ionic/angular";
import { map } from 'rxjs/operators';
const httpOptions = {
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  params: new HttpParams(),
};
@Injectable({
  providedIn: "root",
})
export class CommonService {
  IP:any
  
  constructor(
    public httpClient: HttpClient,
    private toastCtrl: ToastController
  ) {
   
    
  }
  GetCompanyNameLoad(reqLogin) {
    console.log('Work')

    let ip;
    let postData = JSON.stringify(reqLogin);
    console.log('Data', postData)
    return new Promise((resolve, reject) => {
      this.httpClient
        .post(
          localStorage.getItem("ipaddress") +  appsettings.CompanyNameLoad1,
          postData,
          httpOptions
        )
        .subscribe(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
  GetBranchNameLoad(reqLogin) {
    console.log('Work')

  //  let ip="http://localhost:7362";
    let postData = JSON.stringify(reqLogin);
    console.log('Data', postData)
    return new Promise((resolve, reject) => {
      this.httpClient
        .post(
          localStorage.getItem("ipaddress") +  appsettings.BranchNameLoad,
          postData,
          httpOptions
        )
        .subscribe(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
  GetUserName(reqLogin) {

   console.log('Work',reqLogin)

 let  postData= JSON.stringify(reqLogin)
;
   console.log("Data",postData)
   return new Promise((resolve, reject) => {
      this.httpClient
        .post(
          localStorage.getItem("ipaddress") +  appsettings.UserNameLoad,
          postData,
          httpOptions
        )
     
        .subscribe(
         
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
         
        );
       
    });
   
  }
  GetFinalYearLoad(reqLogin) {
    
    let postData = JSON.stringify(reqLogin);
    return new Promise((resolve, reject) => {
      this.httpClient
        .post(
          localStorage.getItem("ipaddress") + appsettings.FinYearLoad,
          postData,
          httpOptions
        )
        .subscribe(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
 PasswordLoad(reqLogin) {
    
    let postData = JSON.stringify(reqLogin);
    return new Promise((resolve, reject) => {
      this.httpClient
        .post(
          localStorage.getItem("ipaddress") + appsettings.LoginAuthentication,
          postData,
          httpOptions
        )
        .subscribe(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
  GetWareHouseNameLoad(reqLogin) {
   let postData = JSON.stringify(reqLogin);
    return new Promise((resolve, reject) => {
      this.httpClient
        .post(
          localStorage.getItem("ipaddress") + appsettings.WarehouseNameLoad,
          postData,
          httpOptions
        )
        .subscribe(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
  GetPartyNameLoad(reqLogin) {
    let postData = JSON.stringify(reqLogin);
     return new Promise((resolve, reject) => {
       this.httpClient
         .post(
          localStorage.getItem("ipaddress") + appsettings.PartyNameLoad,
           postData,
           httpOptions
         )
         .subscribe(
           (data) => {
             resolve(data);
           },
           (error) => {
             reject(error);
           }
         );
     });
   }
  GetWorkOrderNumberLoad(reqLogin) {
    let postData = JSON.stringify(reqLogin);
     return new Promise((resolve, reject) => {
       this.httpClient
         .post(
          localStorage.getItem("ipaddress")+ appsettings.WorkOrderNumberLoad,
           postData,
           httpOptions
         )
         .subscribe(
           (data) => {
             resolve(data);
           },
           (error) => {
             reject(error);
           }
         );
     });
   }
GetOrderNumberLoad   (reqLogin) {
    let postData = JSON.stringify(reqLogin);
     return new Promise((resolve, reject) => {
       this.httpClient
         .post(
          localStorage.getItem("ipaddress")+ appsettings.OrderNumberLoad,
           postData,
           httpOptions
         )
         .subscribe(
           (data) => {
             resolve(data);
           },
           (error) => {
             reject(error);
           }
         );
     });
   }
  GetOpenFormLoad (reqLogin) {
    let postData = JSON.stringify(reqLogin);
     return new Promise((resolve, reject) => {
       this.httpClient
         .post(
          localStorage.getItem("ipaddress") + appsettings.OpenFormCardLoad,
           postData,
           httpOptions
         )
         .subscribe(
           (data) => {
             resolve(data);
           },
           (error) => {
             reject(error);
           }
         );
     });
   }
   GetGatepassNo(reqLogin) {
    let postData = JSON.stringify(reqLogin);
     return new Promise((resolve, reject) => {
       this.httpClient
         .post(
          localStorage.getItem("ipaddress") + appsettings.GatePassNoLoad,
           postData,
           httpOptions
         )
         .subscribe(
           (data) => {
             resolve(data);
           },
           (error) => {
             reject(error);
           }
         );
     });
   }
   YarnReceiptSave(reqLogin) {
    let postData = JSON.stringify(reqLogin);
     return new Promise((resolve, reject) => {
       this.httpClient
         .post(
          localStorage.getItem("ipaddress") + appsettings.ReceiptSaveLoad,
           postData,
           httpOptions
         )
         .subscribe(
           (data) => {
             resolve(data);
           },
           (error) => {
             reject(error);
           }
         );
     });
   }
  ReceiptGridDetailsLoad (reqLogin) {
    let postData = JSON.stringify(reqLogin);
     return new Promise((resolve, reject) => {
       this.httpClient
         .post(
          localStorage.getItem("ipaddress")+ appsettings.ReceiptGridDetailsLoad,
           postData,
           httpOptions
         )
         .subscribe(
           (data) => {
             resolve(data);
           },
           (error) => {
             reject(error);
           }
         );
     });
   }
  SpaceBarDetailsLoad (reqLogin) {
    let postData = JSON.stringify(reqLogin);
     return new Promise((resolve, reject) => {
       this.httpClient
         .post(
          localStorage.getItem("ipaddress") + appsettings.SpaceBarApplyLoad,
           postData,
           httpOptions
         )
         .subscribe(
           (data) => {
             resolve(data);
           },
           (error) => {
             reject(error);
           }
         );
     });
   }
   YarnReceiptEditLoad (reqLogin) {
    let postData = JSON.stringify(reqLogin);
     return new Promise((resolve, reject) => {
       this.httpClient
         .post(
          localStorage.getItem("ipaddress") + appsettings.YarnReceiptEditLoad,
           postData,
           httpOptions
         )
         .subscribe(
           (data) => {
             resolve(data);
           },
           (error) => {
             reject(error);
           }
         );
     });
   }
   YarnReturnReceiptInsert (reqLogin) {
    let postData = JSON.stringify(reqLogin);
     return new Promise((resolve, reject) => {
       this.httpClient
         .post(
          localStorage.getItem("ipaddress") + appsettings.WsYarnReturnReceiptinsertLoad,
           postData,
           httpOptions
         )
         .subscribe(
           (data) => {
             resolve(data);
           },
           (error) => {
             reject(error);
           }
         );
     });
   }
   YarnReceiptdeleteLoad (reqLogin) {
    let postData = JSON.stringify(reqLogin);
     return new Promise((resolve, reject) => {
       this.httpClient
         .post(
          localStorage.getItem("ipaddress") + appsettings.ReceiptDeleteLoad,
           postData,
           httpOptions
         )
         .subscribe(
           (data) => {
             resolve(data);
           },
           (error) => {
             reject(error);
           }
         );
     });
    }
     WsYarnY_REC_NOLoad (reqLogin) {
      let postData = JSON.stringify(reqLogin);
       return new Promise((resolve, reject) => {
         this.httpClient
           .post(
            localStorage.getItem("ipaddress") + appsettings.WsYarnReturnReceiptinsertLoad,
             postData,
             httpOptions
           )
           .subscribe(
             (data) => {
               resolve(data);
             },
             (error) => {
               reject(error);
             }
           );
       });
   }
   WsYarnReceiptGridDetails (reqLogin) {
    let postData = JSON.stringify(reqLogin);
     return new Promise((resolve, reject) => {
       this.httpClient
         .post(
          localStorage.getItem("ipaddress") + appsettings.WsYarnReceiptGridDetailsLoad,
           postData,
           httpOptions
         )
         .subscribe(
           (data) => {
             resolve(data);
           },
           (error) => {
             reject(error);
           }
         );
     });
 }
 WsYarnReceiptAdminApproval (reqLogin) {
  let postData = JSON.stringify(reqLogin);
   return new Promise((resolve, reject) => {
     this.httpClient
       .post(
        localStorage.getItem("ipaddress") + appsettings.WsYarnReceiptAdminApproval,
         postData,
         httpOptions
       )
       .subscribe(
         (data) => {
           resolve(data);
         },
         (error) => {
           reject(error);
         }
       );
   });
}

WsYarnReceiptPackNoLoad (reqLogin) {
  let postData = JSON.stringify(reqLogin);
   return new Promise((resolve, reject) => {
     this.httpClient
       .post(
        localStorage.getItem("ipaddress") + appsettings.WsCurrentPackNoLoad,
         postData,
         httpOptions
       )
       .subscribe(
         (data) => {
           resolve(data);
         },
         (error) => {
           reject(error);
         }
       );
   });
}
 
WsReceiptYarnBagDetailsSaveLoad (reqLogin) {
  let postData = JSON.stringify(reqLogin);
   return new Promise((resolve, reject) => {
     this.httpClient
       .post(
        localStorage.getItem("ipaddress")+ appsettings.WsReceiptYarnBagDetailsSaveLoad,
         postData,
         httpOptions
       )
       .subscribe(
         (data) => {
           resolve(data);
         },
         (error) => {
           reject(error);
         }
       );
   });
}
WsYarnOpenFormGridLoad(reqLogin) {
  console.log('Work')

//  let ip="http://localhost:7362";
  let postData = JSON.stringify(reqLogin);
  console.log('Data', postData)
  return new Promise((resolve, reject) => {
    this.httpClient
      .post(
        localStorage.getItem("ipaddress") +  appsettings.WsYarnOpenFormGridLoad,
        postData,
        httpOptions
      )
      .subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
  });
}
WsYarnReceiptBagDetailsEditLoad (reqLogin) {
  let postData = JSON.stringify(reqLogin);
   return new Promise((resolve, reject) => {
     this.httpClient
       .post(
        localStorage.getItem("ipaddress") + appsettings.WsYarnReceiptBagDetailsEditLoad,
         postData,
         httpOptions
       )
       .subscribe(
         (data) => {
           resolve(data);
         },
         (error) => {
           reject(error);
         }
       );
   });
}

YarnReceiptDeleteLoad(reqLogin) {
  console.log('Work')
 
  let postData = JSON.stringify(reqLogin);
  console.log('Data', postData)
  return new Promise((resolve, reject) => {
    this.httpClient
      .post(
        localStorage.getItem("ipaddress") +  appsettings.YarnReceiptDeleteLoad,
        postData,
        httpOptions
      )
      .subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
  });
}
WvgReceiptGrid(reqLogin) {
  console.log('Work')
 
  let postData = JSON.stringify(reqLogin);
  console.log('Data', postData)
  return new Promise((resolve, reject) => {
    this.httpClient
      .post(
        localStorage.getItem("ipaddress") +  appsettings.weavingreceiptgridload,
        postData,
        httpOptions
      )
      .subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
  });
}
// WvgReceiptSave(reqLogin) {
//   console.log('Work')
 
//   let postData = JSON.stringify(reqLogin);
//   console.log('Data', postData)
//   return new Promise((resolve, reject) => {
//     this.httpClient
//       .post(
//         localStorage.getItem("ipaddress") +  appsettings.WeavingReceiptSaveLoad,
//         postData,
//         httpOptions
//       )
//       .subscribe(
//         (data) => {
//           resolve(data);
//         },
//         (error) => {
//           reject(error);
//         }
//       );
//   });
// }
WvgReceiptPcsNo(reqLogin) {
  console.log('Work')
 
  let postData = JSON.stringify(reqLogin);
  console.log('Data', postData)
  return new Promise((resolve, reject) => {
    this.httpClient
      .post(
        localStorage.getItem("ipaddress") +  appsettings.WeavingReceiptPcsNoLoad,
        postData,
        httpOptions
      )
      .subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
  });
}
WsJWProcessNameLoad(reqLogin: any) {
  let postData = JSON.stringify(reqLogin);
 console.log('Data', postData)
 return new Promise((resolve, reject) => {
   this.httpClient
     .post(
       localStorage.getItem("ipaddress") +  appsettings.WsFabricJWprocessnameload,
       postData,
       httpOptions
     )
     .subscribe(
       (data) => {
         resolve(data);
       },
       (error) => {
         reject(error);
       }
     );
 });
}
WvgReceiptbarNo(reqLogin) {
  console.log('Work')
 
  let postData = JSON.stringify(reqLogin);
  console.log('Data', postData)
  return new Promise((resolve, reject) => {
    this.httpClient
      .post(
        localStorage.getItem("ipaddress") +  appsettings.WeavingReceiptbarNoLoad,
        postData,
        httpOptions
      )
      .subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
  });
}
jobworkReceiptgrid(reqLogin) {
  console.log('Work')
 
  let postData = JSON.stringify(reqLogin);
  console.log('Data', postData)
  return new Promise((resolve, reject) => {
    this.httpClient
      .post(
        localStorage.getItem("ipaddress") +  appsettings.JobworkReceiptGridLoad,
        postData,
        httpOptions
      )
      .subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
  });
}
jobworkGatepass(reqLogin) {
  console.log('Work')
 
  let postData = JSON.stringify(reqLogin);
  console.log('Data', postData)
  return new Promise((resolve, reject) => {
    this.httpClient
      .post(
        localStorage.getItem("ipaddress") +  appsettings.JwGatepassNo,
        postData,
        httpOptions
      )
      .subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
  });
}
jwReceiptSpacebarGridLoad(reqLogin) {
  console.log('Work')
   let postData = JSON.stringify(reqLogin);
  console.log('Data', postData)
  return new Promise((resolve, reject) => {
    this.httpClient
      .post(
        localStorage.getItem("ipaddress") +  appsettings.jwReceiptSpacebarGridLoad,
        postData,
        httpOptions
      )
      .subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
  });
}
   async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      cssClass: 'customToast',
    });
    toast.present();
  }
  async FailedToast(message) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      cssClass: 'FailedToast',
    });
    toast.present();
  }
  JwReceiptSave(reqLogin) {
    let postData = JSON.stringify(reqLogin);
    return new Promise((resolve, reject) => {
      this.httpClient
        .post(
          localStorage.getItem("ipaddress") +  appsettings.JwReceiptSave,
          postData,
          httpOptions
        )
        .subscribe(
          (data) => {
            resolve(data);
          },
          (error) => {
            reject(error);
          }
        );
    });
  } 

storesReceiptgrid(reqLogin) {
  let postData = JSON.stringify(reqLogin);
  return new Promise((resolve, reject) => {
    this.httpClient
      .post(
        localStorage.getItem("ipaddress") +  appsettings.storesreceiptgrid,
        postData,
        httpOptions
      )
      .subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
  });
} 

storesReceiptwarehousedetails(reqLogin) {
  let postData = JSON.stringify(reqLogin);
  return new Promise((resolve, reject) => {
    this.httpClient
      .post(
        localStorage.getItem("ipaddress") +  appsettings.Storesreceiptwarehousedeails,
        postData,
        httpOptions
      )
      .subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
  });
} 
FGReceiptgridload(reqLogin) {
  let postData = JSON.stringify(reqLogin);
  return new Promise((resolve, reject) => {
    this.httpClient
      .post(
        localStorage.getItem("ipaddress") +  appsettings.FGReceiptGridAdd,
        postData,
        httpOptions
      )
      .subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
  });
} 
FeatursSettingsload(reqLogin:any) {
  let postData = JSON.stringify(reqLogin);
 console.log('Data', postData)
 return new Promise((resolve, reject) => {
  
   this.httpClient
     .post(
       localStorage.getItem("ipaddress") +  appsettings.WsFeatursSeetingLoad,
       postData,
       httpOptions
     )
     .subscribe(
       (data) => {
         resolve(data);
         console.log('Commonssssss',data)
       },
       (error) => {
         reject(error);
       }
     );
 });
}
storesReceiptsave(reqLogin: any): Promise<any> {
  const postData = JSON.stringify(reqLogin);
   return this.httpClient.post<any>(
    localStorage.getItem('ipaddress') + appsettings.Storesreceiptsave,
    postData,
    httpOptions
  ).pipe(
    map(response => response) // Modify this line as needed based on your actual data transformation
  ).toPromise();
}
// storesReceiptsave(reqLogin) {
//   let postData = JSON.stringify(reqLogin);
//   return new Promise((resolve, reject) => {
//     this.httpClient
//       .post(
//         localStorage.getItem("ipaddress") +  appsettings.Storesreceiptsave,
//         postData,
//         httpOptions
//       )
//       .subscribe(
//         (data) => {
//           resolve(data);
//         },
//         (error) => {
//           reject(error);
//         }
//       );
//   });


FGReceiptsave(reqLogin: any): Promise<any> {
  const postData = JSON.stringify(reqLogin);
   return this.httpClient.post<any>(
    localStorage.getItem('ipaddress') + appsettings.FGReceiptSave,
    postData,
    httpOptions
  ).pipe(
    map(response => response)  
  ).toPromise();
}

FabricReceiptsave(reqLogin: any): Promise<any> {
  const postData = JSON.stringify(reqLogin);
   return this.httpClient.post<any>(
    localStorage.getItem('ipaddress') + appsettings.FabricReceiptSave,
    postData,
    httpOptions
  ).pipe(
    map(response => response)  
  ).toPromise();
}

WvgReceiptSave(reqLogin: any): Promise<any> {
  const postData = JSON.stringify(reqLogin);
   return this.httpClient.post<any>(
    localStorage.getItem('ipaddress') + appsettings.WeavingReceiptSaveLoad,
    postData,
    httpOptions
  ).pipe(
    map(response => response)  
  ).toPromise();
}
}