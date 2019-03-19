import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-reserva-vehiculo',
  templateUrl: 'reserva-vehiculo.html',
})
export class ReservaVehiculoPage {
  data_vehiculo:any;
  reserva_data:any;
  url_vehiculo:string = 'http://www.tabsa.cl/portal/index.php?option=com_r2&task=externa.generarTicketVehiculo&format=pdf&tmpl=component&id_reserva=';

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    this.data_vehiculo = navParams.data.data_vehiculo;
    this.reserva_data = this.navParams.data.reserva;
    console.log(this.data_vehiculo);
    
  }
  generarPdfVehiculo(data){
    let id_vehiculo = data.id_vehiculo;
    let id_reserva = data.id_reserva;

    console.log('Generando PDF...');


    let url_vehiculo = this.url_vehiculo + id_reserva + '&id_vehiculo=' + id_vehiculo;
    console.log(url_vehiculo);
    this.iab.create(url_vehiculo, '_system', 'location=true');
  }

}