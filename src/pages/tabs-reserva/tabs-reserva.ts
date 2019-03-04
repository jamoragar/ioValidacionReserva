import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//Páginas para Tabs
import { ReservaPage } from '../reserva/reserva';
import { ReservaPersonaPage } from '../reserva-persona/reserva-persona';
import { ReservaVehiculoPage } from '../reserva-vehiculo/reserva-vehiculo';
import { ReservaCargaPage } from '../reserva-carga/reserva-carga';


@IonicPage()
@Component({
  selector: 'page-tabs-reserva',
  templateUrl: 'tabs-reserva.html',
})
export class TabsReservaPage {
  //Tabs
  tab_main:any;
  tab_persona:any;
  tab_vehiculo:any;
  tab_carga:any;
  //fin Tabs

  data_reserva:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab_main = ReservaPage;
    this.tab_persona = ReservaPersonaPage;
    this.tab_vehiculo = ReservaVehiculoPage;
    this.tab_carga = ReservaCargaPage;

    this.data_reserva = this.navParams.data;
    
  }

}
