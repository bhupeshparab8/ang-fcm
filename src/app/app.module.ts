import { AsyncPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagingService } from './messaging.service';
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireMessagingModule } from "@angular/fire/compat/messaging";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [MessagingService, AsyncPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
