import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplicationsComponent } from './applications/applications.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyoffersComponent } from './myoffers/myoffers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button'
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule} from '@angular/material/card';
import { UnknownErrorComponent } from './error-page/unknown-error/unknown-error.component';
import { UnauthorizedErrorComponent } from './error-page/unauthorized-error/unauthorized-error.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    ApplicationsComponent,
    HeaderComponent,
    FooterComponent,
    MyoffersComponent,
    DashboardComponent,
    UnknownErrorComponent,
    UnauthorizedErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
