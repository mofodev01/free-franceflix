import { Component , ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoadingController,AlertController,MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  @ViewChild("email") email;
@ViewChild("username") username;
@ViewChild("mobile") mobile;
@ViewChild("password") password;
@ViewChild("confirm_password") confirm_password;
@ViewChild("mac_add") mac_add;
items_user: string;
items_password: string;
items_telephone: string;
items_email: string;
mac_addr: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,  private http: HttpClient, public storage: Storage, public loading: LoadingController, public alertCtrl: AlertController
    ,public menuCtrl:MenuController
    ) {
      this.menuCtrl.enable(true)
  

    this.items_user = navParams.get('username');
    ///this.items_password = navParams.get('password');
    this.items_telephone = navParams.get('telephone');
    this.items_email = navParams.get('email');
    this.mac_addr= navParams.get('mac_addr');

    console.log(this.mac_addr);
    
    console.log(this.items_user);
    //console.log(this.items_password);
    console.log(this.items_telephone);
    console.log(this.items_email);
  }

  Register(){
    //// https://www.youtube.com/watch?v=Y93BavPNBj8&list=UUHNDpO6neI-9FNaP1VX_LHQ&index=4
   
     if(this.username.value=="" ){
   
    let alert = this.alertCtrl.create({
   
    title:"Attention",
    subTitle:"Le champ Nom d'utilisateur est vide",
    buttons: ['OK']
    });
   
    alert.present();
     } else
    if(this.email.value==""){
   
    let alert = this.alertCtrl.create({
   
    title:"Attention",
    subTitle:"Le champ email est vide",
    buttons: ['OK']
    });
   
    alert.present();
         
   }
    else 
     if(this.mobile.value=="" ){
   
    let alert = this.alertCtrl.create({
   
    title:"Attention",
    subTitle:"Le champ telehphne est vide",
    buttons: ['OK']
    });
   
    alert.present();
     } else
    if(this.password.value=="" && this.confirm_password.value==""){
   
    let alert = this.alertCtrl.create({
   
    title:"Attention",
    subTitle:"Le mot de passe est vide",
    buttons: ['OK']
    });
   
    alert.present();
         
   }
   else if(this.password.value != this.confirm_password.value){
   
    let alert = this.alertCtrl.create({
   
    title:"Attention",
    subTitle:"Le mot de passe ne correspond pas",
    buttons: ['OK']
    });
   
    alert.present();
         
   }
    else 
    {
   
   
      let httpHeaders = new HttpHeaders({
        'Content-Type' : 'application/json',
        'Cache-Control': 'no-cache'
           });    
           let options = {
               headers: httpHeaders
           };
   
     let data = {
           username: this.username.value,
           password: this.password.value,
           mobile: this.mobile.value,
           email: this.email.value  ,
           mac_add: this.mac_add.value,
         };
   
   
    let loader = this.loading.create({
       content: 'Attendez...',
     });
   
    loader.present().then(() => {

      //http://api-web.000webhostapp.com
      //http://space.appmofix.com
   this.http.post('http://space.appmofix.com/api/update_register.php',data, options)
   .map(res => res.toString())
   .subscribe(res => {
   
    loader.dismiss()
   if(res=="updated successfull"){
     let alert = this.alertCtrl.create({
       title:"Congratulation",
       subTitle:(res),
       buttons: ['OK']
       });
      
       alert.present();
   // this.navCtrl.push(HomePage);
   
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
    }
   
   }


}
