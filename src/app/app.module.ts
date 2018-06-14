import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { PhaserComponent } from './phaser/phaser.component';
import { SaberComponent } from './saber/saber.component';
import { SaberDetailComponent } from './saber/saber-detail.component';
import { PhaserDetailComponent } from './phaser/phaser-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    PhaserComponent,
    SaberComponent,
    SaberDetailComponent,
    PhaserDetailComponent,
    MessagesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
