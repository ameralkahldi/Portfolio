import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about/about/about';
import { SkillsComponent } from './skills/skills';
import { ContactComponent } from './contact/contact/contact/contact';
import { ProjectsComponent } from './projects/projects/projects';
import { ReferencesComponent } from './references/references';



@Component({
  selector: 'app-main-contact',
  imports: [
    FormsModule,  
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    ProjectsComponent,
    ReferencesComponent
  ],
  templateUrl: './main-contact.html',
  styleUrls: ['./main-contact.scss']
})
export class MainContactComponent {}