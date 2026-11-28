import { Service, signal } from '@angular/core';
import type { Cv as CvModel } from '../model/cv';

//the last case pushes us to abstain from just returning true/false
export type HireResult = 'added' | 'already-hired' | 'budget-exceeded';
const MAX_HIRES = 3;

@Service()
export class HireService {

    //le role de ce service, is to hold hired cvs, it's the only class allowed to change them
    private readonly _hiredCvs = signal<CvModel[]>([]);
    
    readonly hiredCvs = this._hiredCvs.asReadonly();


    //to hire a candidate with his cv    
    addCv(cv: CvModel): HireResult {
        //we're gonna see if the cv is already hired 
        const exists = this._hiredCvs().some((e) => e.id === cv.id);
        if (exists) {
            return 'already-hired';
        } else {
            //if no, then add it, and if we reached max_hires, notify recruiter
            this._hiredCvs.update((list) => [...list, cv]);
            return this._hiredCvs().length > MAX_HIRES ? 'budget-exceeded' : 'added';
        }

    }
}
