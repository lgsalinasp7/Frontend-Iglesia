import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-analytics-stats',
    templateUrl: './analytics-stats.component.html',
    styleUrls: ['./analytics-stats.component.scss'],
    standalone: false
})
export class AnalyticsStatsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}