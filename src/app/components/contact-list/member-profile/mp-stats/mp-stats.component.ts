import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-mp-stats',
    templateUrl: './mp-stats.component.html',
    styleUrls: ['./mp-stats.component.scss'],
    standalone: false
})
export class MpStatsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }
    
}