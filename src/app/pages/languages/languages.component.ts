import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { StorageKey } from "../../core/services/storage/storage.model"

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  selectedLang: any

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<LanguagesComponent>, public storageService: StorageService) {
    this.selectedLang = this.storageService.read(StorageKey.LANG)
  }

  ngOnInit() {
  }
  chooseLanguage(language) {
    this.storageService.save(StorageKey.LANG, language)
    this.selectedLang = language;
    setTimeout(() => {
      this.dialogRef.close()
    }, 2000)
  }

}
