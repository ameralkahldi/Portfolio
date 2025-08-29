import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  imports: [CommonModule,TranslatePipe],
  templateUrl: './imprint.html',
  styleUrls: ['./imprint.scss']
})
export class ImprintComponent {

}
