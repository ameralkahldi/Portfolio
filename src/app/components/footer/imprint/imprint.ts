import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-imprint',
  standalone: true, 
  imports: [CommonModule, TranslatePipe, RouterModule],
  templateUrl: './imprint.html',
  styleUrls: ['./imprint.scss']
})
export class ImprintComponent {}
