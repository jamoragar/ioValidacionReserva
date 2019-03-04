import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-reserva-vehiculo',
  templateUrl: 'reserva-vehiculo.html',
})
export class ReservaVehiculoPage {
  data_vehiculo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data_vehiculo = navParams.data.data_vehiculo;
    console.log(this.data_vehiculo);
    
  }


}
