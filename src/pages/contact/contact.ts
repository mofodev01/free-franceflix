import { Component , ViewChild } from '@angular/core';
import { NavController, NavParams , AlertController,MenuController/**/} from 'ionic-angular';

//import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular';

import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
 // @ViewChild("username") username;
  @ViewChild("subject") subject;
  @ViewChild("message") message;
  data_storage:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public alertCtrl: AlertController,  private http: HttpClient,  public loading: LoadingController
     ,public storage: Storage
     ,public menuCtrl:MenuController
    ) {
      this.menuCtrl.enable(true)
  }

  protected adjustTextarea(event: any): void {
    let textarea: any		= event.target;
    textarea.style.overflow = 'hidden';
    textarea.style.height 	= 'auto';
    textarea.style.height 	= textarea.scrollHeight + 'px';
    return;
  }

  Register(){
    //// check to confirm the username, email, telephone and password fields are filled
   
    
    if(this.subject.value==""){
   
    let alert = this.alertCtrl.create({
   
    title:"Warning",
    subTitle:"subject field is empty",
    buttons: ['OK']
    });
   
    alert.present();
         
   }
    else 
     if(this.message.value=="" ){
   
    let alert = this.alertCtrl.create({
   
    title:"Warning",
    subTitle:"message field is empty",
    buttons: ['OK']
    });
   
    alert.present();
     } 
   
    else 
    {
   //--------------------------
      this.storage.get("session_storage").then((res)=>{
        this.data_storage=res;
        
        console.log(this.data_storage);
   //--------------------------
  
   
      let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json',
        'Cache-Control': 'no-cache'
           });    
           let options = {
        headers: httpHeaders
           };
   
     let data = {
           username: this.data_storage,
           subject: this.subject.value,
           message: this.message.value     
         };


   
    let loader = this.loading.create({
       content: 'Processing please wait...',
     });
   
    loader.present().then(() => {
   this.http.post('http://space-free.iptvmedia.me/api/contact.php',data, options)
   .map(res => res.toString())
   .subscribe(res => {
   
    loader.dismiss()
   if(res=="Message Saved"){
     let alert = this.alertCtrl.create({
       title:"Congratulation",
       subTitle:(res),
       buttons: ['OK']
       });
      
       alert.present();
    //this.navCtrl.push(LoginPage);
   
   }else
   {
    let alert = this.alertCtrl.create({
    title:"Error",
    subTitle:(res),
    buttons: ['OK']
    });
   
    alert.present();
     } 
   });
   });


//--------------------------
})   
//-------------------------- 


    }
   
   }
}
