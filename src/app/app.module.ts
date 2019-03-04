import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//for Language
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs, 'es');

import { MyApp } from './app.component';
//Páginas de la PWA
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ReservasPage } from '../pages/reservas/reservas';
import { ReservaPage } from '../pages/reserva/reserva';
//Tabs de Reserva
import { TabsReservaPage } from '../pages/tabs-reserva/tabs-reserva';
import { ReservaPersonaPage } from '../pages/reserva-persona/reserva-persona';
import { ReservaVehiculoPage } from '../pages/reserva-vehiculo/reserva-vehiculo';
import { ReservaCargaPage } from '../pages/reserva-carga/reserva-carga';
import { EmbarqueManualPage } from '../pages/embarque-manual/embarque-manual';
//Servicio API Rest -> conexion_tablet.js 
import { RestServiceProvider } from '../providers/rest-service/rest-service';
//Plugin
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ReservasPage,
    ReservaPage,
    TabsReservaPage,
    ReservaPersonaPage,
    ReservaVehiculoPage,
    ReservaCargaPage,
    EmbarqueManualPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ReservasPage,
    ReservaPage,
    TabsReservaPage,
    ReservaPersonaPage,
    ReservaVehiculoPage,
    ReservaCargaPage,
    EmbarqueManualPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: 'es'},
    RestServiceProvider,
    InAppBrowser
  ]
})
export class AppModule {}
