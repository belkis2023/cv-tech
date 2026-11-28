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
    }, 
    {
      id: 4,
      name: 'Mansour',
      firstname: 'Yasmine',
      age: 26,
      cin: '00000000',
      job: 'UX/UI Designer', 
      path: '/assets/yasmine.jpg' 
    }
  ]);

  readonly cvs = this._cvs.asReadonly();

  //methods that are gonna be used by the cv details page, for a specific cv, to see its details+delete
  getCvById(id: number): CvModel | undefined {
    return this._cvs().find((e) => e.id === id);
  }

  deleteCv(id: number) {
    this._cvs.update((list) => list.filter((e) => e.id != id));
  }

}
