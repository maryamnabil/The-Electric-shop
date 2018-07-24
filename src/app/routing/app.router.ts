import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import {ContactUsComponent} from '../contact-us/contact-us.component';
import { HomeComponent} from '../home/home.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import {AddDeviceComponent} from '../add-device/add-device.component'

export const router = [
 { path:'home',component:HomeComponent},

 {path:'contactUs',component:ContactUsComponent},
 {path:'aboutUs',component:AboutUsComponent},
 {path:'addDevice',component:AddDeviceComponent},
 {path:'**', redirectTo:'home'},

]

export const routes:ModuleWithProviders = RouterModule.forRoot(router);