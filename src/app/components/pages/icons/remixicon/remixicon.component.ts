import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-remixicon',
    templateUrl: './remixicon.component.html',
    styleUrls: ['./remixicon.component.scss'],
    standalone: false
})
export class RemixiconComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

}