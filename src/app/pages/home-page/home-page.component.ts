import { Component, OnInit ,AfterViewInit,ElementRef} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core'; 
import { UserobjectserviceService } from "src/app/userobjectservice.service";
declare function js_advanceconversation(profile: any): any;
declare function stopRecord_click(): any;
declare function usersignedin(): any;
declare function  get_JWT_token(): any;
declare function  loadscripts(): void;
//declare function  loadscripts(profile: object | null, user:object|null): void;

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef,private UserobjectserviceService: UserobjectserviceService) {}

    ngOnInit() {    
    	this.loadscripts();
    }
    
    public async advanceconversation() {
        console.log("advanceconversation click");
      js_advanceconversation(this.UserobjectserviceService.loggedinuser);
    }
    
    public async stopRecordingMouseup() {
        console.log("stop recording click");
      stopRecord_click();
    }
    
   public loadscripts(){
       var s0 = document.createElement('script');
        s0.type = "text/javascript";
    	s0.src = "./assets/js/jsrsasign-all-min.js"; 
    	s0.defer = true; 
    	document.body.appendChild(s0);
    	s0.onload = () => {
	     	var s1 = document.createElement('script');
    		s1.src = "./assets/js/constants.js"; 
   	 	//s1.defer = true; 
  	  	document.body.appendChild(s1);
    	
    		var s2 = document.createElement('script');
   	 	s2.src = "./assets/js/jwttoken.js"; 
   	 	s2.defer = true; 
  	  	document.body.appendChild(s2);
  	  	s2.onload = () => {
        		get_JWT_token();//this will get 1 hour valid dialogflow token and set in localstorage
        		var s3 = document.createElement("script");
    			 s3.type = "text/javascript";
   			 s3.src = "./assets/js/GCPuserLoginfunctionAPI.js";
   			 s3.defer=true;
   			 //this.elementRef.nativeElement.appendChild(s3);
    			 document.body.appendChild(s3);
    			 s3.onload = () => {
     	  			  usersignedin();
     	  			  //this.login(user.token,user.ID);//'password');
   			  }
            	}   	

        }

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
     s5.async = true;
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
