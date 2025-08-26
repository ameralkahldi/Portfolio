import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],  
  imports: [CommonModule]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Pekomen Show',
      description: 'A dynamic website showcasing delicious chicken recipes.',
      image: 'assets/img/2025-08-25 (1).png',
      techStack: ['JavaScript', 'CSS', 'HTML', 'API'],
      link: 'https://amer-alkhalidy.developerakademie.net/Pokemon%20API/Pokemon%20API/index.html',
      testLink: 'https://amer-alkhalidy.developerakademie.net/Pokemon%20API/index.html'
    },
    {
      title: 'El Pollo Loco Spiel',
      description: 'A dynamic website showcasing delicious chicken recipes.',
      image: 'assets/img/2025-08-25 (3).png',
      techStack: ['JavaScript', 'CSS', 'HTML'],
      link: 'https://github.com/ameralkahldi/El-Pollo-Loco',
      testLink: 'https://amer-alkhalidy.developerakademie.net/EL%20Pollo%20Loco/index.html'
    },
    {
      title: 'Project 3',
      description: 'Coming soon...',
      image: 'assets/img/coming-soon.png',
      techStack: ['JavaScript', 'CSS', 'HTML'],
      link: '',
      testLink: ''
    }
  ];

  selectedProjectIndex: number | null = null;

  get selectedProject() {
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

  trackByTitle(index: number, project: any): string {
    return project.title;
  }
   prevProject() {
    if (this.selectedProjectIndex === null) return;
    if (this.selectedProjectIndex === 0) {
      this.selectedProjectIndex = this.projects.length - 1; 
    } else {
      this.selectedProjectIndex--;
    }
  }

  nextProject() {
    if (this.selectedProjectIndex === null) return;
    if (this.selectedProjectIndex === this.projects.length - 1) {
      this.selectedProjectIndex = 0; 
    } else {
      this.selectedProjectIndex++;
    }
  }
}
