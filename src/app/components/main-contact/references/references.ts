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
    { name: 'Amer', text: 'Das ist gut' },
    { name: 'Sara', text: 'Ich empfehle die Zusammenarbeit sehr.' },
    { name: 'Khalid', text: 'Eine großartige und einzigartige Erfahrung.' },
    { name: 'Leila', text: 'Elegante Handhabung und Schnelligkeit bei der Ausführung.' },
  ];

  currentIndex = 0;

  nameInput = '';
  textInput = '';

  get visibleCards() {
    return this.allCards.slice(this.currentIndex, this.currentIndex + 3);
  }

  next() {
    if (this.currentIndex + 3 < this.allCards.length) {
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
