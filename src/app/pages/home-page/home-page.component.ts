import { Component, OnInit ,AfterViewInit,ElementRef} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core'; 
import { UserobjectserviceService } from "src/app/userobjectservice.service";
declare function js_advanceconversation(profile: any): any;
declare function stopRecord_click(): any;


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
    
    public async stopRecordingMouseup() {
        console.log("stop recording click");
      stopRecord_click();
    }
    

  
     ngAfterViewInit() {
           
     var englishaccent = document.getElementById('englishaccent');
     englishaccent.textContent = localStorage.getItem("englishaccent");
  
     
     
          var s3 = document.createElement("script");
     s3.type =  "text/javascript";
     const __this = this;
     s3.src = "./assets/js/renderer.js";
     //this.elementRef.nativeElement.appendChild(s3);
     document.body.appendChild(s3);
     
     
          var s4 = document.createElement("script");
     s4.type = "text/javascript";
     s4.src = "./assets/js/aws-lex-audio.js";
     document.body.appendChild(s4);
     
     
     
     
          var s5 = document.createElement("script");
     s5.type = "text/javascript";
     s5.src = "./assets/js/advance-conversation.js";
     document.body.appendChild(s5);
     
     
         var s6 = document.createElement('script');
    	s6.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"; 
    	s6.setAttribute('data-ad-client', "ca-pub-7518857353098283"); 
    	s6.defer = true; // make sure that browser will run script after page loaded
    	document.body.appendChild(s6);
    	s6.onload = () => {
     	    		try {
    				(window["adsbygoogle"] = window["adsbygoogle"] || []).push({});
  			} catch (e) {
    				console.error(e);
  			}
    	}
    	
    	
 
   }
   

  
}
