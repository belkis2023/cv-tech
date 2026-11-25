import { Component, signal } from '@angular/core';
import { CvDetail } from '../cv-detail/cv-detail';
import { CvList } from '../cv-list/cv-list';
import type { Cv as CvModel} from '../model/cv';


@Component({
  imports: [CvDetail, CvList],
  selector: 'app-cv',
  styleUrl: './cv.css',
  templateUrl: './cv.html',
})

//logique: cv huwa l parent, cv-list w cv-detail children , bch yabda fih list te3 les cvs, 

export class Cv {
  //the list of the hardcoded cvs that will be displayed in the beginning
  cvs = signal<CvModel[]>([
    {
      id: 1,
      name: 'Ben Ali',
      firstname: 'Sara',
      age: 24,
      cin: '12345678',
      job: 'Software Developer',
      path: '/assets/sara.jpg' 
    },
    {
      id: 2,
      name: 'Trabelsi',
      firstname: 'Ahmed',
      age: 30,
      cin: '87654321',
      job: 'Designer',
      path: '/assets/man.jpg' 
    },
    {
      id: 3,
      name: 'Jebali',
      firstname: 'Nadia',
      age: 27,
      cin: '11223344',
      job: 'Project Manager', 
      path: '/assets/nadia.jpg' 
    }
  ]);

  //the selected cv will be passed on to the cv detail child component
  selectedCv = signal<CvModel | null>(null);


}
