import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core'; 
import { TranslatePipe } from '@ngx-translate/core';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-imprint',
  standalone: true, 
  imports: [CommonModule, TranslatePipe, RouterModule],
  templateUrl: './imprint.html',
  styleUrls: ['./imprint.scss']
})
export class ImprintComponent implements OnInit { 

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }

}
