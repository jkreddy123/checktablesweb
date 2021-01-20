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
           
     var s = document.createElement("script");
     s.type = "text/javascript";
     s.src = "https://jkreddy123.github.io/checktablesweb/jsrsasign-all-min.js";
     document.body.appendChild(s);
     
          var s1 = document.createElement("script");
     s1.type = "text/javascript";
     s1.src = "https://jkreddy123.github.io/checktablesweb/constants.js";
     document.body.appendChild(s1);
     
          var s2 = document.createElement("script");
     s2.type = "text/javascript";
     s2.src = "https://jkreddy123.github.io/checktablesweb/GCPuserLoginfunctionAPI.js";
     document.body.appendChild(s2);
     
          var s3 = document.createElement("script");
     s3.type =  "text/javascript";
     s4.src = "https://jkreddy123.github.io/checktablesweb/home-page/renderer.js";
     document.body.appendChild(s3);
     
     
          var s4 = document.createElement("script");
     s4.type = "text/javascript";
     s4.src = "https://jkreddy123.github.io/checktablesweb/aws-lex-audio.js";
     document.body.appendChild(s4);
     
     
     
     
          var s5 = document.createElement("script");
     s5.type = "text/javascript";
     s5.src = "https://jkreddy123.github.io/checktablesweb/advance-conversation.js";
     document.body.appendChild(s5);
     
   }
}
