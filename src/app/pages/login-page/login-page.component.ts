import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    email: string;
    password: string;
    errorMessage: string;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.errorMessage = '';
        (window as any).googleLogin = this.googleLogin
        if (this.authService.isLogged()) {
            this.navigateTo();
        }
    }
    
     declare var gapi: any;

ngAfterViewInit() {
   gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'light',
      'onsuccess': param => this.onSignIn(param)
  });
}

public googleLogin(userInfo) {
    console.log(userInfo)
}


public onSignIn(googleUser) {
   //var user : user = new User();
  console.log(googleUser.getAuthResponse());
    //  ((u, p) => {
    //     u.id            = p.getId();
    //     u.name          = p.getName();
    //     u.email         = p.getEmail();
    //     u.imageUrl      = p.getImageUrl();
    //     u.givenName     = p.getGivenName();
    //     u.familyName    = p.getFamilyName();
    //  })(user, googleUser.getBasicProfile());

     // ((u, r) => {
     //    u.token         = r.id_token;
     // })(user, googleUser.getAuthResponse());

      //user.save();
      //this.goHome();
};
    public async login(email: string, password: string) {
        try {
            const url = (await this.authService.mockLogin(
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
        this.router.navigate([url], { replaceUrl: true });
    }
}
