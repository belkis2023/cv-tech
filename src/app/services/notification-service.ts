import { inject, Service } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';



type NotificationType = 'success' | 'error' | 'warning';

@Service()
export class NotificationService {

    private snackBar = inject(MatSnackBar);

    success(message: string) {
        this.show(message, 'success');
    }

    error(message: string) {
        this.show(message, 'error');
    }

    warning(message: string) {
        this.show(message, 'warning');
    }

    private show(messgae: string, type: NotificationType) {
        const config: MatSnackBarConfig = {
            duration: 3000,
            horizontalPosition: 'right', 
            verticalPosition: 'top',
            panelClass: [`toast-${type}`],
        };
        this.snackBar.open(messgae, 'Close', config);
    }

}
