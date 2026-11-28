import { Component, inject, signal } from '@angular/core';
import { CvDetail } from '../cv-detail/cv-detail';
import { CvList } from '../cv-list/cv-list';
import type { Cv as CvModel} from '../../model/cv';
import { CvService } from '../../services/cv-service';
import { HireService } from '../../services/hire-service';
import { HiredList } from '../hired-list/hired-list';



@Component({
  imports: [CvDetail, CvList, HiredList],
  selector: 'app-cv',
  styleUrl: './cv.css',
  templateUrl: './cv.html',
})

//logique: cv huwa l parent, cv-list w cv-detail children 

export class Cv {
  //we inject the service, by doing this we get the same instance of the service everywhere, 
  private cvService = inject(CvService);
  private hireService = inject(HireService);


  cvs = this.cvService.cvs;
  //the selected cv will be passed on to the cv detail child component
  selectedCv = signal<CvModel | null>(null);


  //the hired cvs logic
  hiredCvs = this.hireService.hiredCvs;
  

}
