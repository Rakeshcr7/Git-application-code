import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, ViewContainerRef } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,} from '@angular/router';
import { ReqservicesService } from './reqservices.service';
import { AppComponent } from './app.component';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr/';
import { CookieService } from 'ngx-cookie-service';
import 'rxjs';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrComponent } from './error/err.component';
import { PeopleComponent } from './people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ErrComponent,
    PeopleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastContainerModule,
    ToastrModule.forRoot({
      iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning'
      },
      progressBar: true,
      onActivateTick: true,
      //positionClass: 'inline',
      enableHtml: true,
      positionClass: 'toast-top-right',
      closeButton: true,
      maxOpened: 1
    }),
    RouterModule.forRoot([
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'app', component: AppComponent },
      { path: 'err', component: ErrComponent },
      { path: 'people', component: PeopleComponent }
    ])
  ],
  providers: [ReqservicesService, CookieService],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
