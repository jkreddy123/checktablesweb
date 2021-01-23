import { Component, OnInit, AfterViewInit,ElementRef,NgZone} from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';  
import { UserobjectserviceService } from "src/app/userobjectservice.service";
declare var gapi: any;
declare function usersignedin(profile: any): any;
declare function  get_JWT_token(): any;

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})


export class LoginPageComponent implements OnInit,AfterViewInit {
    email: string;
    password: string;
    errorMessage: string;

    constructor(private authService: AuthService, private router: Router, @Inject(DOCUMENT) private document, private elementRef: ElementRef,private UserobjectserviceService: UserobjectserviceService,private zone: NgZone) {}

    ngOnInit() {
        this.errorMessage = '';
        get_JWT_token();//this will get 1 hour valid dialogflow token and set in localstorage
        (window as any).googleLogin = this.googleLogin
        if (this.authService.isLogged()) {
            this.navigateTo();
        }
    }
    


ngAfterViewInit() {

     var s2 = document.createElement("script");
     s2.type = "text/javascript";
     const __this = this;
     //s2.onload = function () { __this.afterScriptAdded(); };
     s2.src = "https://jkreddy123.github.io/checktablesweb/GCPuserLoginfunctionAPI.js";
     //document.body.appendChild(s2);
     this.elementRef.nativeElement.appendChild(s2);

   gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'light',
      'onsuccess': param => this.onSignIn(param)
  });

}
afterScriptAdded() {
    const params= {
      width: '350px',
      height: '420px',
    };
    
  }
public googleLogin(userInfo) {
    console.log(userInfo)
}


public onSignIn(googleUser) {
   //var user : user = new User();
    var p = googleUser.getBasicProfile();
    var user:any = {};
  console.log(p.getEmail(),p.getImageUrl());
      ((u, p) => {
         u.ID            = p.getId();
         u.Name          = p.getName();
         u.email         = p.getEmail();
         u.imageUrl      = p.getImageUrl();
         u.givenName     = p.getGivenName();
         u.familyName    = p.getFamilyName();
      })(user, googleUser.getBasicProfile());

      ((u, r) => {
         u.token         = r.id_token;
      })(user, googleUser.getAuthResponse());

      //user.save();
      //this.goHome();
    this.UserobjectserviceService.loggedinuser = user;
    localStorage.setItem("userimageurl", user.imageUrl);
    console.log("onSignIn user dict after assign",user);
    //if (typeof (window['usersignedin']) === 'function') {
    //  console.log("calling userdefined function");
    //  window['usersignedin'](p);
    //}
    usersignedin(p);
    this.login(user.token,user.ID);//'password');
    //this.navigateTo('home');
};
    



    public async login(email: string, password: string) {
        try {
            const url = (await this.authService.login(
                email,
                password,
            )) as string;
            this.navigateTo(url);
        } catch (e) {
            this.errorMessage = 'Wrong Credentials!';
            console.error('Unable to Login!\n', e);
        }
    }

    public navigateTo(url?: string) {
        url = url || 'nav';
        this.zone.run(() => this.router.navigate([url], { replaceUrl: true }));
    }
}
