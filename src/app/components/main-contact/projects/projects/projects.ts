import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface TechIcon {
  icon: string;
}

interface Project {
  id:string;
  title: string;
  frage?: string;          
  image: string;
  pro: string[];
  techStack: TechIcon[];
  link: string;
  testLink: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
  imports: [CommonModule, TranslatePipe],
})
export class ProjectsComponent {
 projects: Project[] = [
  {
    id: 'PROJECT1', 
    title: 'Pokomen Show',
    frage: 'PROJECTS.DEFAULT_QUESTION', 
    image: './assets/img/2025-08-25 (1).png',
    pro: ['HTML', 'CSS', 'JavaScript', 'API'],
    techStack: [
      { icon: './assets/icon_skill/html.png' },
      { icon: './assets/icon_skill/Vector (1).png' },
      { icon: './assets/icon_skill/Javascript.png' },
      {icon :'./assets/icon_logos/Api.png'}
    ],
    link: 'https://amer-alkhalidy.developerakademie.net/Pokemon%20API/Pokemon%20API/index.html',
    testLink: 'https://amer-alkhalidy.developerakademie.net/Pokemon%20API/index.html',
  },
  {
    id: 'PROJECT2',
    title: 'El Pollo Loco Spiel',
    frage: 'PROJECTS.DEFAULT_QUESTION',
    image: './assets/img/2025-08-25 (3).png',
    pro: ['HTML', 'CSS', 'JavaScript'],
    techStack: [
      { icon: './assets/icon_skill/html.png' },
      { icon: './assets/icon_skill/Vector (1).png' },
      { icon: '/assets/icon_skill/Javascript.png' },
    ],
    link: 'https://github.com/ameralkahldi/El-Pollo-Loco',
    testLink: 'https://amer-alkhalidy.developerakademie.net/EL%20Pollo%20Loco/index.html',
  },
  {
    id: 'PROJECT3',
    title: 'Join',
    frage: 'PROJECTS.DEFAULT_QUESTION',
    image: '/assets/img/2025-08-25 (3).png',
    pro: ['HTML', 'CSS', 'Typescript', 'Angular','Firebase'],
    techStack: [
      { icon: './assets/icon_skill/html.png' },
      { icon: './assets/icon_skill/Vector (1).png' },
      { icon: './assets/icon_skill/Vector (3).png' },
      { icon: './assets/icon_skill/Angular.png' },
      { icon: './assets/icon_skill/Group.png' },

    ],
    link: '',
    testLink: '',
  },
];


  hoveredProjectIndex: number | null = null;
  selectedProjectIndex: number | null = null;

  get selectedProject(): Project | null {
    if (this.selectedProjectIndex === null) return null;
    return this.projects[this.selectedProjectIndex];
  }

  selectProject(index: number) {
    if (this.selectedProjectIndex === index) {
      this.selectedProjectIndex = null;
    } else {
      this.selectedProjectIndex = index;
    }
  }


  trackByTitle(index: number, project: Project): string {
    return project.title;
  }

  nextProject() {
    if (this.selectedProjectIndex !== null) {
      this.selectedProjectIndex =
        (this.selectedProjectIndex + 1) % this.projects.length;
    }
  }
get projectKeys(): string[] {
  return this.selectedProject ? [this.selectedProject.id] : [];
}

}
