import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: any[];
  selectedItem: string = "";
  showDownArrow: boolean = true;
  userName: any;
  showLogoutPopup:boolean=false;
  isSessionTimeOut:boolean=false;
  @Input() isUserAuthorized:boolean;
  constructor() {
    // this.categories = [{ key: "Articles", value: "article" },{ key: "About", value: "about" }, { key: "Notifications", value: "notification" }, { key: "Surveys", value: "survey" }, { key: "Polls", value: "poll" }, { key: "FAQs", value: "faq" }, { key: "Tags", value: "tag" }, { key: "Gallery", value: "gallery" }];
    this.categories = [{ key: "About", value: "about" }, { key: "Articles", value: "article" }, { key: "Information", value: "info" }, { key: "Gallery", value: "gallery" }];
  }

  ngOnInit() {
    this.userName="Mahesh Pabballa."
  }
 
  onUserNameClick(control) {
    if (control.classList.contains('show'))
      this.showDownArrow = true;
    else
      this.showDownArrow = false;
  }
  showLogoutConfirmationPopup(isSessionTimeOut)
  {
    this.isSessionTimeOut=isSessionTimeOut;
    this.showLogoutPopup=true;
  }
  onHide(event)
  {
    this.showLogoutPopup=false;
  }
}
