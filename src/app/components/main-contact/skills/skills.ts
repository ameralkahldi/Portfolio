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
  }[] = [
    {
    
      icon : 'assets/icon_logos/HTML.png'
    },
    {
    
      icon : 'assets/icon_logos/17. Skill animation.png'
    },
    {
      
      icon : 'assets/icon_logos/JavaScript.png'
    },
    {

      icon : 'assets/icon_logos/Material Design (1).png'
    },
    {
     
      icon : 'assets/icon_logos/TypeScript.png'
    },
    {
     
      icon : 'assets/icon_logos/Angular.png'
    },
    {
      icon : 'assets/icon_logos/Firebase.png'

    },
    {
      
      icon : 'assets/icon_logos/GIT.png'
    }
    ,{
      
      icon : 'assets/icon_logos/Rest-Api.png'
    },
    {
      icon :'assets/icon_logos/Scrum.png'
    },
    {
      icon:'assets/icon_logos/18. Growth Mindset interaction.png'
    }
  ]


}
