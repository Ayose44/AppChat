import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import {Localstorage} from '../../providers/localstorage/localstorage';
import * as firebase from 'firebase';
import { NavController,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	ref;
	name =  this.localstorage.getEmail();
	newmessage;
	messagesList;
  constructor(public navCtrl: NavController, 
  public alert: AlertController, 
  public auth : AuthProvider,   
  private localstorage:Localstorage
) {
  	this.ref = firebase.database().ref('messages');
  }
  ionViewDidLoad(){
  	//reading data from firebase
  	this.ref.on('value',data => {
  		let tmp = [];
  		data.forEach( data => {
  			tmp.push({
  				key: data.key,
  				name: data.val().name,
  				message: data.val().message
  			})
  		});
  		this.messagesList = tmp;
  	});
  }
  send(){
    // add new data to firebase
    console.log(this.localstorage.getEmail());
    var user = this.localstorage.getEmail();
    console.log(user);
  	this.ref.push({
      name: user ,
  		message: this.newmessage
  	});
  }

  cerrarSesion(){
      this.localstorage.clearStorage();
      this.auth.logout();
  }


}