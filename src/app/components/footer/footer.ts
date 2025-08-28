import { Component } from '@angular/core';
import { Imprint } from './imprint/imprint';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Imprint],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class FooterComponent {}
