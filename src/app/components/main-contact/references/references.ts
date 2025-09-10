import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

interface Testimonial {
  name :string,
  text :string
}
@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './references.html',
  styleUrls: ['./references.scss']
})
export class ReferencesComponent {
  testimonials: Testimonial[] = [
    { name: 'John Doe', text: 'Amer is a great team player and always helpful.' },
    { name: 'Jane Smith', text: 'Working with Amer was a pleasure. Very professional.' },
    { name: 'Michael Müller', text: 'He brings a lot of creativity and passion to his work.' }
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
    if (this.currentIndex >= this.testimonials.length) {
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
        this.currentIndex = this.testimonials.length - 1;
      }, 500);
    }
  }

  private startTransition(): void {
    this.isTransitioning = true;
    setTimeout(() => (this.isTransitioning = false), 500);
  }
}
