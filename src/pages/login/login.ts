import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username;
  password;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin(){
    console.log(this.username, this.password);
    this.authProvider.postLogin(this.username, this.password).subscribe(data => {
      console.log(data);
      localStorage.setItem('wpIonicToken', JSON.stringify(data));
    });
  }

}
