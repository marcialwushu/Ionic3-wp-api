import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuotesProvider } from '../../providers/quotes/quotes';


/**
 * Generated class for the QuotesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes-detail',
  templateUrl: 'quotes-detail.html',
})
export class QuotesDetailPage {
  public quote : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private quotesProvider: QuotesProvider) {
    this.quotesProvider.getQuotesById('11').subscribe( data => {
      console.log(data);
      this.quote = data;
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesDetailPage');
  }

}
