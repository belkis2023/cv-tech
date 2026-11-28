import { Component, inject, input } from '@angular/core';
import type { Cv as CvModel } from '../../model/cv';
import { HireService } from '../../services/hire-service';
import { NotificationService } from '../../services/notification-service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MatButtonModule, RouterLink],
  selector: 'app-cv-detail',
  styleUrl: './cv-detail.css',
  templateUrl: './cv-detail.html',
})
export class CvDetail {

  detailedCv = input<CvModel | null>();
  private hireService = inject(HireService);
  private notifications = inject(NotificationService);


  //handle the hiring logic and show the corresponding toast
  hireCv(cv: CvModel) {
    const result = this.hireService.addCv(cv);
    const fullName = `${cv.firstname} ${cv.name}`;

    switch (result) {
      case 'added':
        this.notifications.success(`${fullName} has been hired!`);
        break;
      case 'already-hired':
        this.notifications.error(`${fullName} has been hired!`);
        break;
      case 'budget-exceeded':
        this.notifications.warning(`${fullName} hired, but the budget has been exceeded`);
        break;
    }
  }

}
