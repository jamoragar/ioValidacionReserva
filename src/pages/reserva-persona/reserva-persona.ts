import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-reserva-persona',
  templateUrl: 'reserva-persona.html',
})
export class ReservaPersonaPage {
  reserva_data:any;
  creador_reserva:any;
  cruce_data:any;
  pasajero_data:any;
  valor_reserva:any;
  url:string = "http://www.tabsa.cl/portal/index.php/es/reservas-ext2?view=externa&task=externa.generarTicket&format=pdf&ticket=";
 

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    this.reserva_data = this.navParams.data.reserva;
    this.creador_reserva = this.navParams.data.creador_reserva;
    this.cruce_data = this.navParams.data.cruce[0];
    this.pasajero_data = this.navParams.data.pasajero;
    this.valor_reserva = this.navParams.data.valor_reserva;
    
  }

  generarPDF(data){
    let identificacion;
    let etiqueta;
    console.log("Generando PDF...");
    console.log(data);
    if(!data.rut)
      identificacion = data.pasaporte;
    else
      identificacion = data.rut;
    if(!data.etiqueta)
      etiqueta = ''
    else
      etiqueta = data.etiqueta
      let url = this.url + data.tipo_reserva + '&tmpl=component&id_reserva=' + data.id_reserva + '&cruce=' + data.id_cruce + '&identificacion=' + identificacion + '&id_pasajero=' + data.id_pasajero + '&nombre=' + data.nombre + '&apellido=' + data.apellido + '&asiento=' + etiqueta;
      console.log(url);
    this.iab.create(url, '_system', 'location=true');
  }

}