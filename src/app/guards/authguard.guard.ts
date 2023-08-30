import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree
} from "@angular/router";
import { AuthguradServiceService } from "../authguardservice.service";
 


@Injectable()
export class AuthGuard implements CanActivate {
  isAuthenticated: any;
	Username: string;
	getLogOut:any;
  authenticateUser(value: string) {
    throw new Error("Method not implemented.");
  }
	constructor(
		private authService: AuthguradServiceService,
		private router: Router) { }
    // getAuthStatus()
    // {
	// 	console.log('WORK')
    //     return true;
    // }
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): boolean | Promise<boolean> {
		var isAuthenticated = this.authService.getAuthStatus();
	 ;
            console.log("AUTH", isAuthenticated)
		 if (!isAuthenticated) {
			this.router.navigate(['/home']);
		}
		// if (isAuthenticated) {
			//this.router.navigate(['/login']);
	// }
		return isAuthenticated;
	}
}
