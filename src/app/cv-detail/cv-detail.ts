import { Component, input } from '@angular/core';
import type { Cv as CvModel } from '../model/cv';

@Component({
  imports: [],
  selector: 'app-cv-detail',
  styleUrl: './cv-detail.css',
  templateUrl: './cv-detail.html',
})
export class CvDetail {

  detailedCv = input<CvModel | null>()

}
