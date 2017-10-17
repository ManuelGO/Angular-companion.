import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAckAjnVAbFfvcFVmIoWCBxd6oZgi5YGcQ",
    authDomain: "tracker-455be.firebaseapp.com",
    databaseURL: "https://tracker-455be.firebaseio.com",
    projectId: "tracker-455be",
    storageBucket: "tracker-455be.appspot.com",
    messagingSenderId: "284184293474"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
     apiKey: 'AIzaSyDmOaIIzhvAc-mSah3ize6KCoidxBPDzhA'
   }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
