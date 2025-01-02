import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    standalone: false
})
export class SearchComponent {

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

}