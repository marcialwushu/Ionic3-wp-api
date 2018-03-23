import { HttpClient, HttpClientModule } from '@angular/common/http';
import { QuotesPage } from './../pages/quotes/quotes';
import { LoginPage } from './../pages/login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { ContactPage } from '../pages/contact/contact';
import { AuthProvider } from '../providers/auth/auth';
import { QuotesProvider } from '../providers/quotes/quotes';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    QuotesPage,
    ContactPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    TabsPage,
    QuotesPage,
    ContactPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    QuotesProvider
  ]
})
export class AppModule {}