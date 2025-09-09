import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  imports: [CommonModule, FormsModule,TranslatePipe],
  templateUrl: './references.html',
  styleUrls: ['./references.scss']
})
export class ReferencesComponent {

  originalTestimonials = [
    {
      name: 'A. Fischer – Team Partner',
      text: `I had the good fortune of working with Lukas in a group project at the Developer Akademie...`
    },
    {
      name: 'H. Janisch – Team Partner',
      text: `It was clear from the start that Lukas was someone the team could rely on...`
    },
    {
      name: 'F. Qathasch –Team Partner',
      text: `I truly appreciated Lukas's reliability and technical expertise...`
    }
  ];

 
  allCards = [...this.originalTestimonials,
  
  ];

  currentIndex = 1;
  isTransitioning = false;

  getTransform(): string {
    const cardWidth = 50; 
    const offset = (100 - cardWidth) / 1; 
    return `translateX(calc(-${this.currentIndex * cardWidth}% + ${offset}%))`;
  }

  next(): void {
    if (this.isTransitioning) return;
    this.startTransition();

    this.currentIndex++;


    if (this.currentIndex >= this.allCards.length) {
      setTimeout(() => {
        this.isTransitioning = false;
        this.currentIndex = 0;
      }, 500);
    }
  }

  prev(): void {
    if (this.isTransitioning) return;
    this.startTransition();

    this.currentIndex--;


    if (this.currentIndex < 0) {
      setTimeout(() => {
        this.isTransitioning = false;
        this.currentIndex = this.allCards.length - 1;
      }, 500);
    }
  }

  private startTransition(): void {
    this.isTransitioning = true;
    setTimeout(() => (this.isTransitioning = false), 500);
  }
}
