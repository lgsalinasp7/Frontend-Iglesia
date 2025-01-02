import { Component } from '@angular/core';

@Component({
    selector: 'app-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss'],
    standalone: false
})
export class DatepickerComponent {

    startDate = new Date(1990, 0, 1);

}