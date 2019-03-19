import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-reserva',
  templateUrl: 'reserva.html',
})
export class ReservaPage {
  reserva_data:any;
  creador_reserva:any;
  cruce_data:any;
  pasajero_data:any;
  vehiculo_data:any;
  carga_data:any;
  valor_reserva:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.reserva_data = this.navParams.data.reserva;
    this.creador_reserva = this.navParams.data.creador_reserva;
    this.cruce_data = this.navParams.data.cruce[0];
    this.pasajero_data = this.navParams.data.pasajero;
    this.valor_reserva = this.navParams.data.valor_reserva;
    this.carga_data = this.navParams.data.data_carga;
    this.vehiculo_data = this.navParams.data.data_vehiculo;
  }


}
