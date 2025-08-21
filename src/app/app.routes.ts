import { Routes } from '@angular/router';
import { HomeComponent } from './components/main-contact/home/home';
import { AboutComponent } from './components/main-contact/about/about/about/about';
import { ProjectsComponent } from './components/main-contact/projects/projects/projects';
import { ContactComponent } from './components/main-contact/contact/contact/contact/contact';



 export const routes: Routes = [

{ path: 'about', component: AboutComponent },
{ path: 'projects', component: ProjectsComponent },
{ path: 'contact', component: ContactComponent},
{ path: '**', redirectTo: '' }
];
