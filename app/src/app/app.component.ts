import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import {Storage} from "@ionic/storage";
import {Localstorage} from '../providers/localstorage/localstorage';
import * as firebase from 'firebase';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  rootPage:any = LoginPage;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,     private auth: AuthProvider
  ) {
    /*let config = {
      apiKey: "AIzaSyAg8igjwG5O9LEX9k4GrGvKtAHHvWE7vBU",
      authDomain:"appchat-bf7e8.firebaseapp.com",
      databaseURL: "https://appchat-bf7e8.firebaseio.com",
      projectId: "appchat-bf7e8",
      storageBucket: "appchat-bf7e8.appspot.com",
      messagingSenderId: "1081484103123"
      };
     firebase.initializeApp(config);*/
    platform.ready().then(() => {
      this.auth.Session.subscribe(session=>{
        if(session){
            this.rootPage = HomePage;
        }
          else{
            this.rootPage = LoginPage;
          }
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

