import { Component, OnInit } from '@angular/core';
declare function js_advanceconversation(): any;

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
    public async advanceconversation() {
        console.log("advanceconversation click");
      js_advanceconversation();
    }
    
       ngAfterViewInit() {
           /*
     var s = document.createElement("script");
     s.type = "text/javascript";
     s.src = "src/app/pages/home-page/jsrsasign-all-min.js";
     document.body.appendChild(s);
     
          var s1 = document.createElement("script");
     s1.type = "text/javascript";
     s1.src = "app/pages/home-page/constants.js";
     document.body.appendChild(s1);
     
          var s2 = document.createElement("script");
     s2.type = "text/javascript";
     s2.src = "pages/login-page/GCPuserLoginfunctionAPI.js";
     document.body.appendChild(s2);
     
          var s3 = document.createElement("script");
     s3.type = "text/javascript";
     s3.src = "home-page/renderer.js";
     document.body.appendChild(s3);
     
     
          var s4 = document.createElement("script");
     s4.type = "text/javascript";
     s4.src = "aws-lex-audio.js";
     document.body.appendChild(s4);
     
     
     
     
          var s5 = document.createElement("script");
     s5.type = "text/javascript";
     s5.src = "./advance-conversation.js";
     document.body.appendChild(s5);
     */
   }
}
