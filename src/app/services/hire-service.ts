import { Service, signal } from '@angular/core';
import type { Cv as CvModel } from '../model/cv';

@Service()
export class HireService {

    //le role de ce service, is to hold hired cvs, it's the only class allowed to change them
    private readonly _hiredCvs = signal<CvModel[]>([]);
    
    readonly hiredCvs = this._hiredCvs.asReadonly();


    //to hire a candidate with his cv    
    addCv(cv: CvModel) {
        //we're gonna see if the cv is already hired (true = already hired)
        const exists = this._hiredCvs().some((e) => e.id === cv.id);
        if (exists) {
            return false;
        } else {
            //if no, then add it
            this._hiredCvs.update((hiredCvs) => [...hiredCvs, cv]);
            return true;
            
        }

    }
}
