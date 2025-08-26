import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent {
  skills :{
    name: string;
    icon: string;
  }[] = [
    {
      name: 'HTML',
      icon : 'assets/icon_logos/html-svgrepo-com.png'
    },
    {
      name: 'CSS',
      icon : '/assets/icon_logos/css-svgrepo-com.png'
    },
    {
      name: 'JavaScript',
      icon : '/assets/icon_logos/javascript-16-svgrepo-com.png'
    },
    {
      name:'Bootstrap',
      icon : '/assets/icon_logos/bootstrap-svgrepo-com.png'
    },
    {
      name: 'Angular',
      icon : '/assets/icon_logos/angular-16-svgrepo-com.png'
    },
    {
      name: 'TypeScript',
      icon : '/assets/icon_logos/typescript-16-svgrepo-com (1).png'
    },
    {
      name :'GitHub',
      icon : '/assets/icon_logos/git-svgrepo-com.png'
    }
    ,{
      name : 'Rest Api',
      icon : '/assets/icon_logos/api-svgrepo-com.png'
    }
  ]


}
