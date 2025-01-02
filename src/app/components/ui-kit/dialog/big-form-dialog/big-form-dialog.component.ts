import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-big-form-dialog',
    templateUrl: './big-form-dialog.component.html',
    styleUrls: ['./big-form-dialog.component.scss'],
    standalone: false
})
export class BigFormDialogComponent {

    constructor(
        public dialog: MatDialog
    ) {}

    openCreateUserDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(CreateUserDialogBox, {
            width: '600px',
            enterAnimationDuration,
            exitAnimationDuration
        });
    }

}

@Component({
    selector: 'create-user-dialog',
    templateUrl: './create-user-dialog.html',
    standalone: false
})
export class CreateUserDialogBox {

    constructor(
        public dialogRef: MatDialogRef<CreateUserDialogBox>
    ) {}

    close(){
        this.dialogRef.close(true);
    }

}