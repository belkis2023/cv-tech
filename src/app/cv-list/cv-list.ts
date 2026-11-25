import { Component, input, output } from '@angular/core';
import type { Cv as CvModel } from '../model/cv';
import { NgStyle } from '@angular/common';
@Component({
  imports: [NgStyle],
  selector: 'app-cv-list',
  styleUrl: './cv-list.css',
  templateUrl: './cv-list.html',
})
export class CvList {

  cvsInList = input<CvModel[]>();
  cvSelected = output<CvModel>();

  selectCv(cv: CvModel) {
    this.cvSelected.emit(cv);
  }

}
