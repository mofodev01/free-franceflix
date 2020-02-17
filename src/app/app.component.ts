import { Component, ViewChild } from '@angular/core';
import { Nav, Platform ,ActionSheetController,AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';





import { LivePage } from '../pages/live/live';
import { FavoratePage } from '../pages/favorate/favorate';
import { FilmsPage } from '../pages/films/films';
import { ProfilePage } from '../pages/profile/profile'




//import { ContactPage } from '../pages/contact/contact'

import { Market } from '@ionic-native/market';
import { SocialSharing } from '@ionic-native/social-sharing';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { Network } from '@ionic-native/network';
import { OneSignal } from '@ionic-native/onesignal';
//import { LocationAccuracy } from '@ionic-native/location-accuracy';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  /*
  HomeRoot = LivePage;
  FavorateRoot = FavoratePage;
  SearchRoot = FilterPage;
 */
  

  @ViewChild(Nav) nav: Nav;

  //rootPage: any = HomePage;
  rootPage: any = ProfilePage;

  pages: Array<{title: string , icon: string , component: any}>;

  constructor(public alertCtrl: AlertController ,public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen,private market: Market,
    private socialSharing: SocialSharing,
    public actionsheetCtrl: ActionSheetController,
    private admobFree: AdMobFree,
    private network: Network,
    private oneSignal: OneSignal
    ) {
    this.initializeApp();
    this.showBanner();
    //this.localisation();
    // used for an example of ngFor and navigation   SeriesPage
    this.pages = [
      
     { title: 'Home', component: ProfilePage,icon : "home" },
     { title: 'Live Tv', component: LivePage,icon : "desktop" }
     ,{ title: 'VOD Movies', component: FilmsPage,icon : "film" }
     // ,{ title: 'Contact', component: ContactPage,icon : "mail" }
      ,{ title: 'favourites', component: FavoratePage,icon : "bookmarks" }
      
     
    ];

    

  }

 

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     
    });

   
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  network_space(){
    this.network.onDisconnect().subscribe(() => {
      let alert = this.alertCtrl.create({
      title: "The connection failed !",
      subTitle: "There may be a problem in your Internet connection. Try Again !",
      buttons: [{
  
      text: ("Okay")
      }]
      });
      alert.present();
      });
      this.network.onConnect().subscribe(() => {
  
      });
  }
  

  rateApp(){
    if (this.platform.is('android')) {
    this.market.open('com.stories.magic');
    let alert = this.alertCtrl.create({
      title: "platform !",
      subTitle: "is android",
      buttons: [{
  
      text: ("Okay")
      }]
      });
      alert.present();
    }else if(this.platform.is('ios')){
    this.market.open('com.stories.magic');
    let alert = this.alertCtrl.create({
      title: "platform !",
      subTitle: "is ios",
      buttons: [{
  
      text: ("Okay")
      }]
      });
      alert.present();
   
    }
    }

    shareApp() {
      if (this.platform.is('android')) {
      /*  this.appodeal.hide(this.appodeal.AD_TYPES.BANNER);*/
        let actionSheet = this.actionsheetCtrl.create({
          title: 'Partager',
          cssClass: 'action-sheets-basic-page',
          buttons: [
            {
              text: 'Facebook',
              role: 'destructive',
              icon: 'logo-facebook',
             // cssClass: 'action-red',
              handler: () => {
               
                  this.socialSharing.shareViaFacebook("", "", "https://play.google.com/store/apps/details?id=com.iptvmedia.space").then(() => {
                    console.log("shareViaFacebook: Success");
                  }).catch(() => {
                    console.error("shareViaFacebook: failed");
                  });
               
              }
            },
         
          
            {
              text: 'Whatsapp',
              role: 'destructive',
              icon: 'logo-whatsapp',
           
              handler: () => {
                this.socialSharing.shareViaWhatsApp("", "https://image.prntscr.com/image/-xJzT0x6TWCYaoQdZ1WjBA.png" ,"https://play.google.com/store/apps/details?id=com.iptvmedia.space").then(() => {
                  console.log("shareViaWhatsApp: Success");
                }).catch(() => {
                  console.error("shareViaWhatsApp: failed");
                });
              }
            },
            {
              text: 'Twitter',
              role: 'destructive',
              icon: 'logo-twitter',
           
              handler: () => {
                this.socialSharing.shareViaTwitter("", "https://image.prntscr.com/image/-xJzT0x6TWCYaoQdZ1WjBA.png" ,"https://play.google.com/store/apps/details?id=com.iptvmedia.space").then(() => {
                  console.log("shareViatwitter: Success");
                }).catch(() => {
                  console.error("shareViatwitter: failed");
                });
              }
            },
            {
              text: 'Autre',
              role: 'destructive',
              icon: 'paper-plane',
            
              handler: () => {
                this.socialSharing.share("","", "https://image.prntscr.com/image/-xJzT0x6TWCYaoQdZ1WjBA.png" ,"https://play.google.com/store/apps/details?id=com.iptvmedia.space").then(() => {
                  console.log("shareViatwitter: Success");
                }).catch(() => {
                  console.error("shareViatwitter: failed");
                });
              }
            },
            {
              text: 'annuler',
              role: 'cancel', // will always sort to be on the bottom
              icon: 'close' ,
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        actionSheet.present();
      }
     else if (this.platform.is('ios')) {
        /*  this.appodeal.hide(this.appodeal.AD_TYPES.BANNER);*/
          let actionSheet = this.actionsheetCtrl.create({
            title: 'Partager',
            cssClass: 'action-sheets-basic-page',
            buttons: [
              {
                text: 'Facebook',
                role: 'destructive',
                icon: 'logo-facebook',
               // cssClass: 'action-red',
                handler: () => {
                 
                    this.socialSharing.shareViaFacebook("", "", "https://apps.apple.com/fr/app/apple-store/id375380948").then(() => {
                      console.log("shareViaFacebook: Success");
                    }).catch(() => {
                      console.error("shareViaFacebook: failed");
                    });
                 
                }
              },
           
            
              {
                text: 'Whatsapp',
                role: 'destructive',
                icon: 'logo-whatsapp',
             
                handler: () => {
                  this.socialSharing.shareViaWhatsApp("", "https://image.prntscr.com/image/-xJzT0x6TWCYaoQdZ1WjBA.png" ,"https://apps.apple.com/fr/app/apple-store/id375380948").then(() => {
                    console.log("shareViaWhatsApp: Success");
                  }).catch(() => {
                    console.error("shareViaWhatsApp: failed");
                  });
                }
              },
              {
                text: 'Twitter',
                role: 'destructive',
                icon: 'logo-twitter',
             
                handler: () => {
                  this.socialSharing.shareViaTwitter("", "https://image.prntscr.com/image/-xJzT0x6TWCYaoQdZ1WjBA.png" ,"https://apps.apple.com/fr/app/apple-store/id375380948").then(() => {
                    console.log("shareViatwitter: Success");
                  }).catch(() => {
                    console.error("shareViatwitter: failed");
                  });
                }
              },
              {
                text: 'Autre',
                role: 'destructive',
                icon: 'paper-plane',
              
                handler: () => {
                  this.socialSharing.share("","", "https://image.prntscr.com/image/-xJzT0x6TWCYaoQdZ1WjBA.png" ,"https://apps.apple.com/fr/app/apple-store/id375380948").then(() => {
                    console.log("shareViatwitter: Success");
                  }).catch(() => {
                    console.error("shareViatwitter: failed");
                  });
                }
              },
              {
                text: 'annuler',
                role: 'cancel', // will always sort to be on the bottom
                icon: 'close' ,
                handler: () => {
                  console.log('Cancel clicked');
                }
              }
            ]
          });
          actionSheet.present();
        }
      }
      showBanner(){
        if (this.platform.is('android')) {
        const bannerConfig: AdMobFreeBannerConfig = {
          // add your config here
          // for the sake of this example we will just use the test config
          isTesting: true,// Remove in production
          autoShow: true,
         // id:'ca-app-pub-3000905870244951/2118429550'


         };
         this.admobFree.banner.config(bannerConfig);
         
         this.admobFree.banner.prepare()
           .then(() => {
             // banner Ad is ready
             // if we set autoShow to false, then we will need to call the show method here
           })
           .catch(e => console.log(e));
          }
           else if (this.platform.is('ios')) {
            const bannerConfig: AdMobFreeBannerConfig = {
              // add your config here
              // for the sake of this example we will just use the test config
              isTesting: true,// Remove in production
              autoShow: true,
             // id:'ca-app-pub-3000905870244951/2118429550'
    
    
             };
             this.admobFree.banner.config(bannerConfig);
             
             this.admobFree.banner.prepare()
               .then(() => {
                 // banner Ad is ready
                 // if we set autoShow to false, then we will need to call the show method here
               })
               .catch(e => console.log(e));
           }
      
      }//fin banner

      push_notification(){

        this.oneSignal.startInit('2f695949-c542-408c-bea5-7b8221535304', '686818001505');
    
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        
        this.oneSignal.handleNotificationReceived().subscribe(() => {
         // do something when notification is received
        });
        
        this.oneSignal.handleNotificationOpened().subscribe(() => {
          // do something when a notification is opened
        });
        
        this.oneSignal.endInit();
    
      }
    
    


      ///source push notification :  https://www.youtube.com/watch?v=xxhcKe1C4-I

     /**/

      

}
