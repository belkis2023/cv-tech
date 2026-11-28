import { Component, input, output } from '@angular/core';
import type { Cv as CvModel } from '../../model/cv';

@Component({
  imports: [],
  selector: 'app-mini-cv',
  styleUrl: './mini-cv.css',
  templateUrl: './mini-cv.html',
})
export class MiniCv {

  cv = input.required<CvModel>();

  //configuring different sizes, because we're reusing this mini-cv in different places
  cardWidth = input('100%');
  photoSize = input('100px');  

}
