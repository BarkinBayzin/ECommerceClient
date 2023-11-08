import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { ComponentsModule } from "./admin/layout/components/components.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'bootstrap/dist/js/bootstrap.min.js';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        {provide: "baseUrl", useValue: "https://localhost:7035/api", multi: true}
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminModule,
        UiModule,
        ComponentsModule,
        BrowserAnimationsModule, // required animations module for toastr
        ToastrModule.forRoot(), // ToastrModule added
        NgxSpinnerModule,
        HttpClientModule
    ]
})
export class AppModule { }
