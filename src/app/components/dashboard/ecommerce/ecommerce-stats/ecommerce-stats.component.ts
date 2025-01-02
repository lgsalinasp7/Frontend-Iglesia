import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-ecommerce-stats',
    templateUrl: './ecommerce-stats.component.html',
    styleUrls: ['./ecommerce-stats.component.scss'],
    standalone: false
})
export class EcommerceStatsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}