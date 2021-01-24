import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LanguagesComponent } from '../languages/languages.component';
import languages from "../../languages"

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  options = ["Choose English Accent"]

  constructor(public matDialog: MatDialog) { }

  ngOnInit() {
  }
  chooseLanguage() {
    this.matDialog.open(LanguagesComponent, {
      width: "90%",
      maxWidth: "400px",
      height: "90%",
      maxHeight: "700px",
      data: languages,
      panelClass: "languages-dialog-container"
    })
  }
}
