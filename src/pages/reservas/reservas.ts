import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reservas',
  templateUrl: 'reservas.html',
})
export class ReservasPage {

  reservas:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.reservas = this.navParams.data;
    }

  ionViewDidLoad() {
    console.log(this.reservas);
  }
}
