import { QuotesPage } from './../quotes/quotes';
import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = QuotesPage;

  tab2Root = ContactPage;

  constructor() {

  }
}
