import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';

@Injectable()
export class Localstorage {
  email: string;
  constructor(public http: Http,private storage:Storage) {
    console.log('Hello Localstorage Provider');
    }

    //store the email address
    setEmail(email){
    this.email = email;

    }

    //get the stored email
    getEmail(){
    		return this.email;
    	
    }

    //delete the email address
    removeEmail(){
    this.storage.remove('email').then(()=>{
    		console.log('email is removed');
    	});
    }

    //clear the whole local storage
    clearStorage(){
    	this.storage.clear().then(()=>{
		console.log('all keys are cleared');
    	});
    }

}