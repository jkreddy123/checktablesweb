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
}
