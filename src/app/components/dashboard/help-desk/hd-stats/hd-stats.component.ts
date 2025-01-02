import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-hd-stats',
    templateUrl: './hd-stats.component.html',
    styleUrls: ['./hd-stats.component.scss'],
    standalone: false
})
export class HdStatsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

}