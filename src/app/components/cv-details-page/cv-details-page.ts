import { Component, computed, effect, inject, input } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { CvService } from '../../services/cv-service';
import { Router, RouterLink } from '@angular/router';
import { NotificationService } from '../../services/notification-service';

@Component({
  imports: [MatAnchor, RouterLink],
  selector: 'app-cv-details-page',
  styleUrl: './cv-details-page.css',
  templateUrl: './cv-details-page.html',
})
export class CvDetailsPage {


  id = input.required<string>();

  private cvService = inject(CvService);
  private router = inject(Router);
  private notifications = inject(NotificationService);

  cv = computed(() => this.cvService.getCvById(Number(this.id())));
  
  deleteCv() {
    const cv = this.cv();
    if (!cv) return;
    this.cvService.deleteCv(cv.id);
    this.notifications.success(`${cv.firstname} ${cv.name} deleted`);
    console.log(this.cvService.cvs());
    this.router.navigate(['/cvs']);
  }

}
