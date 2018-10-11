import {Component} from "@angular/core";
import {NavController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public nav: NavController, public menu: MenuController, public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);
  }

  // login and go to home page
  login() {
    this.nav.setRoot(HomePage);
  }

}
