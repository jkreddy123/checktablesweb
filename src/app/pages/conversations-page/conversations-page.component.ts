import { Component, OnInit,AfterViewInit,ElementRef,ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';  
import { HttpClient, HttpResponse, HttpHeaders,HttpErrorResponse } from '@angular/common/http';

import { UserobjectserviceService } from 'src/app/userobjectservice.service';

declare function tableconversations(profile: any): any;
declare function fetchData(): any;

@Component({
  selector: 'app-conversations-page',
  templateUrl: './conversations-page.component.html',
  styleUrls: ['./conversations-page.component.scss']
})

  
export class ConversationsPageComponent implements OnInit ,AfterViewInit {
  tableColumns  :  string[] = ['Multiplier', 'Multiplicand'];
  conversations:any = [];
       
  constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef,private UserobjectserviceService: UserobjectserviceService,private cdref: ChangeDetectorRef,private http: HttpClient) { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
 
     const s2 = document.createElement('script');
     s2.type = 'text/javascript';
     const __this = this;
     // s2.onload = function () { __this.afterScriptAdded(); };
     s2.src = 'https://jkreddy123.github.io/checktablesweb/GCPuserLoginfunctionAPI.js';
     // document.body.appendChild(s2);
     this.elementRef.nativeElement.appendChild(s2);

     this.fetchData();


  }
  private async fetchData(){
     var user:any = {};

     user = this.UserobjectserviceService.loggedinuser;
     console.log("user object in conversations page",user);
     
     var userdata = {
        "ID": localStorage.getItem("userID");//user.ID
    };
     const url = "https://us-central1-mlkaggle-288509.cloudfunctions.net/tableconversations";
     
     const headers = new HttpHeaders({'Content-Type': 'application/json'});
     this.http.post(url, JSON.stringify(userdata), {headers: headers}).subscribe(
        (data) => {
            console.log(data);this.conversations = data;
        },
        (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            } else {
                console.log('Server-side error occured.');
            }
        }
    );
     
     //if (typeof (window.tableconversations) === 'function') {
     // console.log('calling userdefined function');
     // this.conversations = window.tableconversations(user).toPromise();
     // console.log("conversations dict in ngafterviewinit",this.conversations);
     //}
  }
  
  ngAfterContentChecked() {

    this.cdref.detectChanges();

  }
}
