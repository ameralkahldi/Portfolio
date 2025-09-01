import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-references',
  imports: [CommonModule, FormsModule],
  templateUrl: './references.html',
  styleUrls: ['./references.scss']
})
export class ReferencesComponent {
allCards = [
  {
    name: 'A. Fischer – Team Partner',
    text: `I had the good fortune of working with Lukas in a group project at the Developer Akademie that involved a lot of effort. He always stayed calm, cool, and focused, and made sure our team was set up for success. He's super knowledgeable, easy to work with, and I'd happily work with him again given the chance.`
  },
  {
    name: 'H. Janisch – Team Partner',
    text: `It was clear from the start that Lukas was someone the team could rely on. His proactive contributions were invaluable.`
  },
  {
    name: 'F. Qathasch – Frontend Developer',
    text: `I truly appreciated Lukas's reliability and technical expertise. He consistently took initiative and helped move the project forward.`
  },
  {
    name: 'A. Alkhalidy – Frontend Developer',
    text: `With his solid technical background and collaborative spirit, Lukas made a real difference in the outcome of our projec`
  },
  {
    name: 'F. Yasser – Frontend Developer',
    text: `It was clear from the start that Lukas was someone the team could rely on. His proactive contributions were invaluable.`
  }
];


  currentIndex = 0;

  nameInput = '';
  textInput = '';

  get visibleCards() {
    return this.allCards.slice(this.currentIndex, this.currentIndex + 3);
  }

next() {
  if (this.currentIndex + 1 <= this.allCards.length - 3) {
    this.currentIndex++;
  }
}

prev() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  }
}

  addTestimonial() {
    if (this.nameInput.trim() && this.textInput.trim()) {
      this.allCards.push({
        name: this.nameInput,
        text: this.textInput
      });

      this.nameInput = '';
      this.textInput = '';
    }
  }
get totalGroups() {
  return Math.ceil(this.allCards.length / 3);
}

get currentGroupIndex() {
  return Math.floor(this.currentIndex / 1); 
}

setCurrentGroup(index: number) {
  this.currentIndex = index;
}

}