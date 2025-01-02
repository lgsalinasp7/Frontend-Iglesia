import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-members-grid',
    templateUrl: './members-grid.component.html',
    styleUrls: ['./members-grid.component.scss'],
    standalone: false
})
export class MembersGridComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

}