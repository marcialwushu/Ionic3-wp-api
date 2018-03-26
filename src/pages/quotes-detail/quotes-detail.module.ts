import { QuotesDetailPage } from './quotes-detail';
;
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';


@NgModule({
  declarations: [
    QuotesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(QuotesDetailPage),
  ],
})
export class TabsPageModule {}
