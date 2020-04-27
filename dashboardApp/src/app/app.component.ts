import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title =  'dashboardApp';
  loadComponents: boolean = false;
  isIframe: boolean = false;
  //constructor(private masterDataService: MasterdataService, private adal: MsAdalAngular6Service, private userService: UserService) { }
  constructor(){}
  ngOnInit(): void {
    this.isIframe = window !== window.parent && !window.opener;
    console.log(window !== window.parent && !window.opener);
    var envConfig ="local";
    if(envConfig == 'local')
    {
      this.loadComponents = true;
    }
    // if (envConfig.configEnv != 'local') {
    //   this.adal.handleCallback();
    //   if (this.adal.LoggedInUserEmail && this.adal.isAuthenticated) {
    //     this.loadComponents = true;
    //   }
    //   else {
    //     this.loadComponents = false;
    //     this.adal.login();
    //   }
    // }
    // else {
    //   this.loadComponents = true;
    // }
  }
}
