import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './core/components/nav/nav.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpConfigInterceptor } from './core/services/http/interceptor.service';
import { MatDialogModule, MatToolbarModule } from '@angular/material';
import { LanguagesComponent } from './pages/languages/languages.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
    declarations: [AppComponent, LanguagesComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NavModule,
        HttpClientModule,
        MatTableModule, 
        MatDialogModule,
        MatToolbarModule,
        MatListModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpConfigInterceptor,
            multi: true,
        },
    ],
    entryComponents: [
        LanguagesComponent
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
