import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loadComponents: boolean = false;
  isIframe: any = null;
  envConfig: any = 'local';
  isUserAuthorized: boolean = false;

  constructor(private router: Router, private ngZone: NgZone) {
    //check if it is the iframe
    this.isIframe = window !== window.parent && !window.opener;
    let user;
    try{
    user = JSON.parse(localStorage.getItem('loggedInUser'));
    }
    catch(ex){
      localStorage.clear();
    }
    if(this.envConfig == 'local')
    {
      this.loadComponents=true;
      this.isUserAuthorized = true;
    }
    // if (this.envConfig.configEnv != 'local') {
    //   //for every token renewal operation the app is loaded in ifrmae
    //   //if it is the iframe and if we have the user context then do not initalize again, else initalize
    //   if (!this.isIframe || (!user || (user && !user.id))) {
    //     this.initalize();
    //   }
    // }
    // else {
    //   this.initalize();
    // }
  }

  ngOnInit() {
  }

  // initalize() {
  //   if (this.envConfig.configEnv != 'local') {
  //     this.masterDataService.fetchMasterData().subscribe((result: any) => {
  //       if (result && result.data && result.data.towersDetails) {
  //         this.masterDataService.setMasterData(result);
  //         this.userService.getUserBasicProfile().subscribe((result: any) => {
  //           if (result) {
  //             this.isUserAuthorized=true;
  //             this.userService.buildUserContext(result);
  //             localStorage.setItem('loggedInUser', JSON.stringify(result));
  //             this.ngZone.run(() => {
  //               this.loadComponents = true;
  //               if (window.location.hash == '' || window.location.hash == '#/')
  //                 this.router.navigate(["article"]);
  //             });
  //           }
  //         });
  //       }
  //     },err => {
  //       this.ngZone.run(() =>{
  //         this.isUserAuthorized=false;
  //         this.loadComponents = true;
  //         this.router.navigate(["accessDenied"]);
  //       });
  //       });
  //   }
  //   else {
  //     this.masterDataService.fetchMasterData().subscribe((result: any) => {
  //       if (result && result.data && result.data.towersDetails) {
  //         this.isUserAuthorized=true;
  //         this.masterDataService.setMasterData(result);
  //         this.loadComponents = true;
  //         if (window.location.hash == '' || window.location.hash == '#/')
  //           this.router.navigate(["article"]);
  //       }
  //     },err => {
  //       this.ngZone.run(() =>{
  //         this.isUserAuthorized=false;
  //         this.loadComponents = true;
  //         this.router.navigate(["accessDenied"]);
  //       });
  //       });
  //   }
  // }
}
