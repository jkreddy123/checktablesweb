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
  tableColumns  :  string[] = ['Multiplier', 'Multiplicand','Answer'];
  conversations:any = [];
  displayedColumns: string[];

  dataSource = [];

  groupingColumn="datestring";

  reducedGroups = [];

  initialData: any [];




    
       
  constructor(@Inject(DOCUMENT) private document, private elementRef: ElementRef,private UserobjectserviceService: UserobjectserviceService,private cdref: ChangeDetectorRef,private http: HttpClient) { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
 
     const s2 = document.createElement('script');
     s2.type = 'text/javascript';
     const __this = this;
     // s2.onload = function () { __this.afterScriptAdded(); };
     s2.src = 'https://jkreddy123.github.io/audioweb/GCPuserLoginfunctionAPI.js';
     // document.body.appendChild(s2);
     this.elementRef.nativeElement.appendChild(s2);

     this.fetchData();


  }
  private async fetchData(){
     var user:any = {};

     user = this.UserobjectserviceService.loggedinuser;
     console.log("user object in conversations page",user);
     
     var userdata = {
        "ID": localStorage.getItem("userID")//user.ID
    };
     const url = "https://us-central1-mlkaggle-288509.cloudfunctions.net/tableconversations";
     
     const headers = new HttpHeaders({'Content-Type': 'application/json'});
     this.http.post(url, JSON.stringify(userdata), {headers: headers}).subscribe(
        (data) => {
            	console.log(data);this.conversations = data;
                //let inputData = people;
    		if(!this.initData(data)) return;
    		this.buildDataSource();
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
  
  /**
   * Discovers columns in the data
   */
  initData(data){
    if(!data) return false;
    this.displayedColumns = Object.keys(data[0]);
    this.displayedColumns = this.displayedColumns.filter(item => item !== "userID");
    this.displayedColumns = this.displayedColumns.filter(item => item !== "datestring");
    this.displayedColumns = this.displayedColumns.filter(item => item !== "result");
    //this.displayedColumns = this.displayedColumns.filter(item => item !== "timestring");
    this.displayedColumns=["timestring","multiplier", "multiplicand", "answer"];
    console.log(this.displayedColumns);
    this.initialData = data;
    return true;
  }

  /**
   * Rebuilds the datasource after any change to the criterions
   */
  buildDataSource(){
    this.dataSource = this.groupBy(this.groupingColumn,this.initialData,this.reducedGroups);
  }
  
  /**
   * Groups the @param data by distinct values of a @param column
   * This adds group lines to the dataSource
   * @param reducedGroups is used localy to keep track of the colapsed groups
   */
  groupBy(column:string,data: any[],reducedGroups?: any[]){
    console.log(column,data,reducedGroups);
    if(!column) return data;
    let collapsedGroups = reducedGroups;
    if(!reducedGroups) collapsedGroups = [];
    const customReducer = (accumulator, currentValue) => {
      let currentGroup = currentValue[column];
      if(!accumulator[currentGroup])
      accumulator[currentGroup] = [{
        groupName: `${currentValue[column]}`,
        value: currentValue[column], 
        isGroup: true,
        reduced: collapsedGroups.some((group) => group.value == currentValue[column])
      }];
      
      accumulator[currentGroup].push(currentValue);
	console.log(accumulator);
      return accumulator;
    }
    let groups = data.reduce(customReducer,{});
    let groupArray = Object.keys(groups).map(key => groups[key]);
    let flatList = groupArray.reduce((a,c)=>{return a.concat(c); },[]);

    return flatList.filter((rawLine) => {
        return rawLine.isGroup || 
        collapsedGroups.every((group) => rawLine[column]!=group.value);
      });
  }

  /**
   * Since groups are on the same level as the data, 
   * this function is used by @input(matRowDefWhen)
   */
  isGroup(index, item): boolean{
    return item.isGroup;
  }

  /**
   * Used in the view to collapse a group
   * Effectively removing it from the displayed datasource
   */
  reduceGroup(row){
    row.reduced=!row.reduced;
    if(row.reduced)
      this.reducedGroups.push(row);
    else
      this.reducedGroups = this.reducedGroups.filter((el)=>el.value!=row.value);
    
    this.buildDataSource();
  }

}
