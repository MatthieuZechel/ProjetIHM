import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email : string;
  password: string;
  login$ : Subscription;

  constructor(public router : Router, public loginService : LoginService, public alertController : AlertController) { }

  ngOnInit() {
  }

  login(){
    this.login$ = this.loginService.login(this.email,this.password).subscribe(
      async isLogged => {
        if(isLogged){
          await this.router.navigateByUrl('home');
        }else{
          const alert = await this.alertController.create({
            header: 'Alert',
            message: 'Email ou mot de passe invalide',
            buttons: ['OK'],
            backdropDismiss: false
          });
          await alert.present();
        }
      }
    );
  }

}
