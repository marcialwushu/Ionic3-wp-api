import { QuotesPage } from './quotes';
;
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';


@NgModule({
  declarations: [
    QuotesPage,
  ],
  imports: [
    IonicPageModule.forChild(QuotesPage),
  ],
})
export class TabsPageModule {}
