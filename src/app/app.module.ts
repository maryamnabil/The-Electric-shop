import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
//Components 
import { HomeComponent } from './home/home.component';
import {HeaderComponent} from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AboutUsComponent } from './about-us/about-us.component';
import { AddDeviceComponent } from './add-device/add-device.component';
//Pipes
import { FilterPipe} from './Pipes/custom-pipes.pipe';
//routing
import {routes} from './routing/app.router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FilterPipe,
    FooterComponent,
    ContactUsComponent,
    NavbarComponent,
    AboutUsComponent,
    AddDeviceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    HttpModule,
    routes,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
