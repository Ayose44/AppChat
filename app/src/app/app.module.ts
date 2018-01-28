import { Network } from '@ionic-native/network';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MyApp } from './app.component';
import {IonicStorageModule} from "@ionic/storage";
import { Localstorage } from './../providers/localstorage/localstorage';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';


let config = {
  apiKey: "AIzaSyAg8igjwG5O9LEX9k4GrGvKtAHHvWE7vBU",
  authDomain:"appchat-bf7e8.firebaseapp.com",
  databaseURL: "https://appchat-bf7e8.firebaseio.com",
  projectId: "appchat-bf7e8",
  storageBucket: "appchat-bf7e8.appspot.com",
  messagingSenderId: "1081484103123"
  };
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    Network,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    Localstorage,
    
  ]
})
export class AppModule {}
