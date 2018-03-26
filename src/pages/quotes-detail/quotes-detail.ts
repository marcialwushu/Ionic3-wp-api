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
  content: any;
  public quoteid;
  
  


  constructor(public navCtrl: NavController, public navParams: NavParams, private quotesProvider: QuotesProvider) {
    this.quoteid = this.navParams.get('id');
    console.log(this.quoteid);
    this.quotesProvider.getQuotesById(this.quoteid).subscribe( data => {
      let retorno = (data as any);
      console.log(data);
      this.quote = retorno;
      this.content = this.quote;
      console.log(this.content);

    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesDetailPage');
  }

}
