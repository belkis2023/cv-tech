import { Routes } from '@angular/router';
import { ToDo } from './components/to-do/to-do';
import { Cv } from './components/cv/cv';

export const routes: Routes = [
    { path: '', redirectTo: 'cvs', pathMatch: 'full' },
    { path: 'cvs', component: Cv },
    { path: 'todo', component: ToDo },
];
