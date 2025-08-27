import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports: [CommonModule]
})
export class HeaderComponent implements OnInit {
  currentLang: string = 'en';
  isMobileView: boolean = false;
  isMenuVisible: boolean = false;

  ngOnInit(): void {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.currentLang = savedLang;
    }
    this.checkScreenWidth(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth(event.target.innerWidth);
  }

  checkScreenWidth(width: number) {
    if (width <= 800) {
      this.isMobileView = true;
      this.isMenuVisible = false; 
    } else {
      this.isMobileView = false;
      this.isMenuVisible = true; 
    }
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  switchLanguage(lang: string) {
    this.currentLang = lang;
    localStorage.setItem('lang', lang);

    if (this.isMobileView) {
      this.isMenuVisible = false;
    }
  }
  closeMenu() {
  this.isMenuVisible = false;
}

}
