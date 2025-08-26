import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  imports: [CommonModule]   
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Pekomen Show',
      description: 'JavaScript, CSS, HTML, and API',
      image: 'assets/img/2025-08-25 (1).png',
      link: 'https://amer-alkhalidy.developerakademie.net/Pokemon%20API/Pokemon%20API/index.html',
      testLink: 'https://amer-alkhalidy.developerakademie.net/Pokemon%20API/index.html'
    },
    {
      title: 'El Pollo Loco Spiel',
      description: 'JavaScript, CSS, and HTML',
      image: 'assets/img/2025-08-25 (3).png',
      link: 'https://github.com/ameralkahldi/El-Pollo-Loco',
      testLink: 'https://amer-alkhalidy.developerakademie.net/EL%20Pollo%20Loco/index.html'
    },
    {
      title: 'Project 3',
      description: 'Coming soon...',
      image: 'assets/img/coming-soon.png',
      link: '',
      testLink: ''
    }
  ];

  selectedProjectIndex = 0;

  get selectedProject() {
    return this.projects[this.selectedProjectIndex];
  }

  selectProject(index: number) {
    this.selectedProjectIndex = index;
  }
  trackByTitle(index: number, project: any): string {
  return project.title;
}

}
