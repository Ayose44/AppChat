import { Component } from '@angular/core';
import { Network } from '@ionic-native/network';
import {  NavController, NavParams, AlertController, Platform, ToastController } from 'ionic-angular';
import {Localstorage} from '../../providers/localstorage/localstorage';
import { Injectable } from '@angular/core';

import { AuthProvider } from '../../providers/auth/auth';
 var navigator: any;
 var Connection: any;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = { email : '', password : ''};
  //imagen:string='../../assets/imgs/green.png'
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private network: Network,
    public auth : AuthProvider,
    public alertCtrl : AlertController,
    private localstorage:Localstorage,
    private platform: Platform,
    private toast:ToastController
  ) {
    
  }

ionViewWillEnter(){
  this.network.onConnect().subscribe(()=>{
    var red = document.getElementById('img');
    red.setAttribute('src','../../assets/imgs/green.png');
  })

  this.network.onDisconnect().subscribe(()=>{
    var red = document.getElementById('img');
    red.setAttribute('src','../../assets/imgs/red.png');
  })

}
   
  
  signin(){
    
    this.auth.registerUser(this.user.email,this.user.password)
    .then((user) => {
      // El usuario se ha creado correctamente
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })

  }

  login()
{
    this.auth.loginUser(this.user.email,this.user.password ).then((user) => {
      this.localstorage.setEmail(this.user.email);
      
      }
    )
     .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })

  }

}