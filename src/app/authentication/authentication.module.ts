import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { CustomizerSettingsService } from '../components/customizer-settings/customizer-settings.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LogoutComponent } from './logout/logout.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ConfirmMailComponent } from './confirm-mail/confirm-mail.component';
import { SharedModule } from '../shared.modulo';


@NgModule({
  declarations: [
    ConfirmMailComponent,
    ForgotPasswordComponent,
    LockScreenComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ResetPasswordComponent,

  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ],
  providers: [CustomizerSettingsService]
})
export class AuthenticationModule { }
