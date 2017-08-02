import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoutingModule} from './app.routing';
import { NavigationBarComponent } from './Navigation Bar/nav';
import { MainBodyModule } from './Main-Body/body';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MainBodyModule
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
