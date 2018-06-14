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

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    PhaserComponent,
    SaberComponent,
    SaberDetailComponent,
    PhaserDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
