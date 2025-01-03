import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomizerSettingsService } from 'src/app/components/customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: false
})
export class LoginComponent {

    hide = true;

    constructor(
        public router : Router,
      // public themeService: CustomizerSettingsService
    ) {}

    // toggleTheme() {
    //     this.themeService.toggleTheme();
    // }

    // toggleCardBorderTheme() {
    //     this.themeService.toggleCardBorderTheme();
    // }

    // toggleCardBorderRadiusTheme() {
    //     this.themeService.toggleCardBorderRadiusTheme();
    // }

    // toggleRTLEnabledTheme() {
    //     this.themeService.toggleRTLEnabledTheme();
    // }

    ingresar(){
        this.router.navigate(['/dashboard']);
    }
}
