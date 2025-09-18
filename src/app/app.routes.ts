import { Routes } from '@angular/router';
import { ImprintComponent } from './components/footer/imprint/imprint';
import { MainContactComponent } from './components/main-contact/main-contact';
import { PrivacyPolicy } from './components/main-contact/privacy/privacy-policy';



 export const routes: Routes = [
{ path: '', component: MainContactComponent },
{ path: 'legal', component: ImprintComponent },
{ path: 'privacy', component: PrivacyPolicy },
{ path: '**', redirectTo: '' }
];
