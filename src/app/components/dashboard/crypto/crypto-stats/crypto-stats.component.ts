import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-crypto-stats',
    templateUrl: './crypto-stats.component.html',
    styleUrls: ['./crypto-stats.component.scss'],
    standalone: false
})
export class CryptoStatsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}