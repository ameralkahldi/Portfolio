import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule,TranslatePipe],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  isLineVisible = false;

showLines() {
  this.isLineVisible = true; // تظهر الصورة عند تمرير الماوس
}

keepLinesVisible() {
  this.isLineVisible = true; // تبقى ظاهرة حتى بعد إخراج الماوس
}


}
