import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { LoadingController, App , AlertController,MenuController,Platform  } from 'ionic-angular';
import { HttpClient,HttpHeaders  } from '@angular/common/http';


//

import { LivePage } from '../live/live';
import { FilmsPage } from '../films/films';

//
//import { SafariViewController } from '@ionic-native/safari-view-controller';

import { Downloader,DownloadRequest,NotificationVisibility } from '@ionic-native/downloader';
import { InAppBrowser } from '@ionic-native/in-app-browser';
//import { AdMobFree,AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

//


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  app_link:any;
  app_title:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http:  HttpClient,
    private downloader: Downloader,
    private iab: InAppBrowser,
    //private admobFree: AdMobFree
) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    //this.download_app();
  }
  gotolive() {
    this.navCtrl.setRoot(LivePage);
  }
  gotovod() {
    this.navCtrl.setRoot(FilmsPage);
  }


download_app(){
  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
       let options = {
    headers: httpHeaders
       };

       this.http.get('http://space.appmofix.com/api/setting.php',options)
              .subscribe(res => {
       
       
       this.app_link=res[0].franceflix_pro;
       console.log(this.app_link);
       this.app_title=res[0].franceflix_title;
       console.log(this.app_title);


       });
       var request: DownloadRequest = {
        uri:''+this.app_link+'' ,
        title: ''+this.app_title+'',
        description: 'com.franceflix.streaming',
        mimeType: 'application/vnd.android.package-archive',
        //mimeType: '',
        visibleInDownloadsUi: true,
        notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
        destinationInExternalFilesDir: {
            dirType: 'Downloads',
            subPath: 'Franceflix_Pro.apk'
        }
    };


this.downloader.download(request)
            .then((location: string) => console.log('File downloaded at:'+location))
            .catch((error: any) => console.error(error));
  
}



openWebpage(){
  const browser = this.iab.create('http://appmofix.com/');
  browser.close();
}


}
