import { Component, OnInit } from '@angular/core'; 
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true, 
  imports: [TranslatePipe],
  templateUrl: './privacy-policy.html',
  styleUrls: ['./privacy-policy.scss']
})
export class PrivacyPolicy implements OnInit { 

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }

}
