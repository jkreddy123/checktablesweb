import { Component, OnInit, Injectable, Inject } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
var privacyURL = 2;
@Component({
  selector: 'app-tableslogin-page',
  templateUrl: './tableslogin-page.component.html',
  styleUrls: ['./tableslogin-page.component.scss']
})
export class TablesloginPageComponent implements OnInit {

  constructor(public actroute: ActivatedRoute,public router: Router) { 
  	this.actroute.params.subscribe(params => {
   		privacyURL = Number.parseInt(params['paramKey']);
   		console.log("privacyURL in privacy url", privacyURL);
	})}

  ngOnInit(): void {
   //this.id = this.route.snapshot.params['id'];
   
  }


}
