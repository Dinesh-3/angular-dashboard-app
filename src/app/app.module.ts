import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
// MATERIAL ICON
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PopulationComponent } from './components/population/population.component';
import { DensityComponent } from './components/density/density.component';
import { LandAreaComponent } from './components/land-area/land-area.component';
import { NetworkConnectionComponent } from './components/network-connection/network-connection.component'

import { ChartsModule } from 'ng2-charts';

import { FetchDataService } from './services/fetch-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component' 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PopulationComponent,
    DensityComponent,
    LandAreaComponent,
    NetworkConnectionComponent,
    ScrollToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
