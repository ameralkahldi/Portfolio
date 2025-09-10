import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface TechIcon {
  icon: string;
}

interface Project {
  title: string;
  frage?: string;          
  description: string;
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
      title: 'Pekomen Show',
      frage: 'What is this project About ?',
      description:
        'Pekomen is a simple and modern app to present and manage creative projects. It’s responsive, multilingual, and supports live demos and tech stacks.',
      image: './assets/img/2025-08-25 (1).png',
      pro: ['HTML', 'CSS', 'JavaScript', 'API'],
      techStack: [
        { icon: 'assets/icon_skill/HTML.png' },
        { icon: './assets/icon_skill/CSS.png' },
        { icon: './assets/icon_skill/Frame 375.png' },
      ],
      link: 'https://amer-alkhalidy.developerakademie.net/Pokemon%20API/Pokemon%20API/index.html',
      testLink: 'https://amer-alkhalidy.developerakademie.net/Pokemon%20API/index.html',
    },
    {
      title: 'El Pollo Loco Spiel',
      description:
        'Jump, run and throw game based on object-oriented approach.Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      image: './assets/img/2025-08-25 (3).png',
      pro: ['HTML', 'CSS', 'JavaScript'],
      techStack: [
        { icon: './assets/icon_skill/HTML.png' },
        { icon: './assets/icon_skill/CSS.png' },
        { icon: './assets/icon_skill/Frame 375.png' },
      ],
      link: 'https://github.com/ameralkahldi/El-Pollo-Loco',
      testLink: 'https://amer-alkhalidy.developerakademie.net/EL%20Pollo%20Loco/index.html',
    },
    {
      title: 'Project 3',
      description: 'Coming soon...',
      image: './assets/img/2025-08-25 (3).png',
      pro: ['HTML', 'CSS', 'JavaScript', 'API'],
      techStack: [
        { icon: 'assets/icon_skill/HTML.png' },
        { icon: 'assets/icon_skill/CSS.png' },
        { icon: 'assets/icon_skill/Frame 375.png' },
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
}
