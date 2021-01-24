import { Component, OnInit ,AfterViewInit,ElementRef} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core'; 
import { UserobjectserviceService } from "src/app/userobjectservice.service";
declare function js_advanceconversation(profile: any): any;

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef,private UserobjectserviceService: UserobjectserviceService) {}

    ngOnInit() {}
    
    public async advanceconversation() {
        console.log("advanceconversation click");
      js_advanceconversation(this.UserobjectserviceService.loggedinuser);
    }
    
     ngAfterViewInit() {
           
     var englishaccent = document.getElementById('englishaccent');
     englishaccent.textContent = localStorage.getItem("englishaccent");
  
     
     
          var s3 = document.createElement("script");
     s3.type =  "text/javascript";
     const __this = this;
     s3.src = "https://jkreddy123.github.io/checktablesweb/renderer.js";
     this.elementRef.nativeElement.appendChild(s3);
     //document.body.appendChild(s3);
     
     
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
