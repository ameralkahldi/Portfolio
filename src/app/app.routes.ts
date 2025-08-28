import { Routes } from '@angular/router';
import { ImprintComponent } from './components/footer/imprint/imprint';
import { MainContactComponent } from './components/main-contact/main-contact';



 export const routes: Routes = [

{ path: '', component: MainContactComponent },
{ path: 'legal', component: ImprintComponent },
{ path: '**', redirectTo: '' }
];
