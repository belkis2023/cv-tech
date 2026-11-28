import { Routes } from '@angular/router';
import { ToDo } from './components/to-do/to-do';
import { Cv } from './components/cv/cv';
import { CvDetailsPage } from './components/cv-details-page/cv-details-page';

export const routes: Routes = [
    { path: '', redirectTo: 'cvs', pathMatch: 'full' },
    { path: 'cvs', component: Cv }, 
    { path: 'cvs/:id', component: CvDetailsPage },
    { path: 'todo', component: ToDo },
    { path: '**', redirectTo: 'cvs' }, //to match any url 
];
