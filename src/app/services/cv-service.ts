import { Service, signal } from '@angular/core';
import type { Cv as CvModel } from '../model/cv';

@Service()
export class CvService {

    //the list of the hardcoded cvs that will be displayed in the beginning
    //when we want to use it we just inject the service, and then use the cvs
    //we're gonna make the cvs readonly for components  
  private readonly _cvs = signal<CvModel[]>([
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

  readonly cvs = this._cvs.asReadonly();

}
