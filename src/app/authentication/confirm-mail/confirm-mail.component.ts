import { Component } from '@angular/core';
import { CustomizerSettingsService } from 'src/app/components/customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-confirm-mail',
    templateUrl: './confirm-mail.component.html',
    styleUrls: ['./confirm-mail.component.scss'],
    standalone: false
})
export class ConfirmMailComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleCardBorderTheme() {
        this.themeService.toggleCardBorderTheme();
    }

    toggleCardBorderRadiusTheme() {
        this.themeService.toggleCardBorderRadiusTheme();
    }

}
