import { Routes } from '@angular/router';
import { HomeComponent } from './components/header/home/home/home';
import { AboutComponent } from './components/header/about/about/about';
import{ProjectsComponent} from './components/header/projects/projects/projects';
import { ContactComponent } from './components/header/contact/contact/contact';


 export const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: 'projects', component: ProjectsComponent },
{ path: 'contact', component: ContactComponent},
{ path: '**', redirectTo: '' }
];
