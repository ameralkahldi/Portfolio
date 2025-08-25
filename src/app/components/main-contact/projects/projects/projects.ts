import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
projects : {
  title?: string;
  description?: string;
  image ?: string;
  link ?: string;
  testLink ?: string;
}[] = [
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
    image: '',      
    link: '',
    testLink: ''
  }
];

}
