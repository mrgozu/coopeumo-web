import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { EmComponent } from './components/home/em/em.component';
import { InfoComponent } from './components/home/info/info.component';
import { AlertComponent } from './components/dashboard/alert/alert.component';
import { GermSemillComponent } from './components/dashboard/germ-semill/germ-semill.component';
import { SegComponent } from './components/dashboard/seg/seg.component';
import { EmDashComponent } from './components/dashboard/em/em.component';
import { AlertDetailComponent } from './components/dashboard/detail/alert-detail/alert-detail.component';
import { DataComponent } from './components/dashboard/detail/data/data.component';
import { GraphComponent } from './components/dashboard/detail/graph/graph.component';
import { LoginComponent } from './components/shared/navbar/login.component';
import { HomeComponent } from './pages/home/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// aws
import Amplify from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    EmComponent,
    InfoComponent,
    AlertComponent,
    GermSemillComponent,
    EmDashComponent,
    SegComponent,
    AlertDetailComponent,
    DataComponent,
    GraphComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
