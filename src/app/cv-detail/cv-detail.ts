import { Component, inject, input } from '@angular/core';
import type { Cv, Cv as CvModel } from '../model/cv';
import { HireService } from '../services/hire-service';

@Component({
  imports: [],
  selector: 'app-cv-detail',
  styleUrl: './cv-detail.css',
  templateUrl: './cv-detail.html',
})
export class CvDetail {

  detailedCv = input<CvModel | null>();
  private hireService = inject(HireService);


  //handle the hiring logic
  hireCv(cv: Cv) {
    this.hireService.addCv(cv);
  }

}
