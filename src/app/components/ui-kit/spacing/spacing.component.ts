import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-spacing',
    templateUrl: './spacing.component.html',
    styleUrls: ['./spacing.component.scss'],
    standalone: false
})
export class SpacingComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

}