import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { MainComponent } from './Component/main/main.component';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './Service/auth.service';
import { ValidateService } from './Service/validate.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './Component/profile/profile.component';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { ModalComponent, ModalModule } from 'ngb-modal';

export function tokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),
    ModalModule
  ],
  providers: [AuthService, ValidateService, JwtHelperService],
  bootstrap: [AppComponent],
})
export class AppModule {}
