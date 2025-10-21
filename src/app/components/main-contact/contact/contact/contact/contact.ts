import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, Validators } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe,RouterModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  successMessage = '';
  errorMessage = '';
  scrollActive = false;

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false
  };

    

  post = {
    endPoint: 'https://ameralkhalidy.de/sendMail.php',
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
  this.successMessage = '';
  this.errorMessage = '';

  if (!ngForm.form.valid) {
    this.errorMessage = 'Please fill in all required fields correctly.';
    return;
  }

  const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailPattern.test(this.contactData.email)) {
    this.errorMessage = '';
    setTimeout(() => {
      this.errorMessage = 'Please enter a valid email address.';
    });
    return;
  }

  this.http.post(this.post.endPoint, this.post.body(this.contactData))
    .subscribe({
      next: (response) => {
        ngForm.resetForm();
        this.successMessage = 'Your message has been sent successfully!';

        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      error: (error) => {
        console.error(error);
        this.errorMessage = 'Something went wrong. Please try again later.';
      },
      complete: () => console.info('Send post complete'),
    });
}


  

startScroll() {
  if (this.contactData.privacy) {
    this.scrollActive = true;
  }
}






}