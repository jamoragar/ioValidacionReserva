import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reserva-carga',
  templateUrl: 'reserva-carga.html',
})
export class ReservaCargaPage {
  carga_data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carga_data = navParams.data.data_carga;
    console.log(this.carga_data);
    
    
  }


}
