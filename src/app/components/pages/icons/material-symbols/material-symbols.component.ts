import { Component } from '@angular/core';
import { CustomizerSettingsService } from '../../../customizer-settings/customizer-settings.service';

@Component({
    selector: 'app-material-symbols',
    templateUrl: './material-symbols.component.html',
    styleUrls: ['./material-symbols.component.scss'],
    standalone: false
})
export class MaterialSymbolsComponent {

    constructor(
        public themeService: CustomizerSettingsService
    ) {}

    toggleTheme() {
        this.themeService.toggleTheme();
    }

}