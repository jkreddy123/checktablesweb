import { Component, OnInit ,AfterViewInit,ChangeDetectorRef, AfterContentChecked} from '@angular/core';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit,AfterViewInit {
    currentphoto:string = '';
    
    constructor(private cdRef: ChangeDetectorRef) {}

    ngOnInit() {}
    ngAfterViewInit() {

        var userimageurl = localStorage.getItem("userimageurl");
        console.log("in logo component",userimageurl);
        this.currentphoto = userimageurl;
        //document.getElementById('imageDiv').innerHTML = '<img src="' + userimageurl + '" class="rounded-corners"/>';
        this.cdRef.detectChanges();
    }

}
