import { Component } from '@angular/core';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about/about/about';
import { SkillsComponent } from './skills/skills';
import { ContactComponent } from './contact/contact/contact/contact';
import { ProjectsComponent } from './projects/projects/projects';



@Component({
  selector: 'app-main-contact',
  imports: [HomeComponent, AboutComponent, SkillsComponent, ContactComponent, ProjectsComponent],
  templateUrl: './main-contact.html',
  styleUrls: ['./main-contact.scss']
})
export class MainContactComponent {

}
