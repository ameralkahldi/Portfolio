import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [ TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  
  startScroll(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement;
  target.classList.add('scrolling');
}

stopScroll(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement;
  target.classList.remove('scrolling');
}


}
