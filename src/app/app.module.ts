import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
////import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyApp } from './app.component';
///import { HomePage } from '../pages/home/home';
import { LivePage } from '../pages/live/live';
////import { AnimePage } from '../pages/anime/anime';
import { FavoratePage } from '../pages/favorate/favorate';
import { FilmsPage } from '../pages/films/films';





import { DetailPage } from '../pages/detail/detail'
import { DetailfilmsPage } from '../pages/detailfilms/detailfilms'



import { ContactPage } from '../pages/contact/contact';
import { ProfilePage } from '../pages/profile/profile'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StreamingMedia } from '@ionic-native/streaming-media';
import { JsonDataProvider } from '../providers/json-data/json-data';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { Toast } from '@ionic-native/toast';

import { HttpClientModule } from '@angular/common/http';
import { DatabaseProvider } from '../providers/database/database';
import { IonicStorageModule } from '@ionic/storage';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Market } from '@ionic-native/market';
import { AdMobFree } from '@ionic-native/admob-free';
import { Network } from '@ionic-native/network';
import { Downloader } from '@ionic-native/downloader';
import { OneSignal } from '@ionic-native/onesignal';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ListeServeLivePage } from '../pages/liste-serve-live/liste-serve-live';
import { ListeServerFilmsPage } from '../pages/liste-server-films/liste-server-films';







/**/
@NgModule({
  declarations: [
    MyApp,
    ///HomePage,
    LivePage,
    SearchPipe,
  SortPipe,
 /// AnimePage,
  FilmsPage,

  FavoratePage,
  

  
  DetailPage,
  DetailfilmsPage,
 
  ListeServeLivePage,
  ListeServerFilmsPage,
  ContactPage,
  ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ///HomePage,
    LivePage,
    ///AnimePage,
    FilmsPage,

    FavoratePage,
   

   
    DetailPage,
    DetailfilmsPage,
   
    ListeServeLivePage,
    ListeServerFilmsPage,
    ContactPage,
    ProfilePage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StreamingMedia,
    
    SQLitePorter,
    SQLite,
    Toast,
    SocialSharing,
    Market,
    
    Downloader,
    InAppBrowser,
    OneSignal,
   /**/ 
    HttpClientModule,

   
   
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JsonDataProvider,
    DatabaseProvider
   , AdMobFree
   ,Network
  ]
})
export class AppModule {}
