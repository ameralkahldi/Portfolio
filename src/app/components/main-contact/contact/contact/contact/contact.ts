import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  successMessage = '';
  errorMessage = '';

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false
  };

private endPoint = 'http://ameralkhalidy.de';

  constructor(private http: HttpClient, private translate: TranslateService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

      this.http.post(this.endPoint, this.contactData, { headers, responseType: 'text' })
        .subscribe({
          next: () => {
            this.successMessage = this.translate.instant('CONTACT.SUCCESS_MESSAGE');
            this.errorMessage = '';
            form.resetForm();
            setTimeout(() => this.successMessage = '', 5000);
          },
          error: () => {
            this.errorMessage = this.translate.instant('CONTACT.ERROR_MESSAGE');
            this.successMessage = '';
            setTimeout(() => this.errorMessage = '', 5000);
          },
          complete: () => console.info('📬 Form submission completed'),
        });
    }
  }
}
