import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule,TranslatePipe],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class SkillsComponent {
  skills :{
 
    icon: string;
    text :string
    
  }[] = [
    {
    
      icon : './assets/icon_logos/html.png',
      text : 'HTML'
    },
    {

      icon : './assets/icon_logos/16. Tech icons.png',
       text : 'CSS',

    },
    {

      icon : './assets/icon_logos/Javascript.png',
       text : 'JavaScript'
    },
    {

      icon : './assets/icon_logos/Frame.png',
       text : 'Material Design'
    },
    {

      icon : './assets/icon_logos/Vector (1).png',
       text : 'TypeScript',
    },
    {
     
      icon : './assets/icon_logos/Angular.png',
       text : 'Angular'
    },
    {
      icon : './assets/icon_logos/16. Tech icons (1).png',
       text : 'Firebase'

    },
    {
      
      icon : './assets/icon_logos/16. Tech icons (2).png',
       text : 'Git'
    }
    ,{
      
      icon : './assets/icon_logos/Api.png',
       text : 'REST-API'
    },
    {
      icon : './assets/icon_logos/16. Tech icons (3).png',
       text : 'Scrum'
    },
    {
      icon:'./assets/icon_logos/16. Tech icons (4).png',
       text : 'Growth mindset'
    }
  ]


}
