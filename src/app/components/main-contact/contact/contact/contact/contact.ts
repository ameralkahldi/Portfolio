import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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

    

  post = {
    endPoint: 'http://ameralkhalidy.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };
  http =inject(HttpClient)

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid ) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid) {

      ngForm.resetForm();
    }
  }
  scrollActive = false;

startScroll() {
  if (this.contactData.privacy) {
    this.scrollActive = true;
  }
}



}