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
    this.errorMessage = '';
    if (ngForm.submitted && ngForm.form.valid ) {
      console.log({
        "contactData": JSON.stringify(this.contactData)
      });
      if(this.contactData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) === null){
        console.log("Validation Error");
        
        this.errorMessage = 'Please enter a valid email address.';
        return;
      } else {
        console.log("Validation Success");
        this.errorMessage = '';
      }
      
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.successMessage = 'Your message has been sent successfully!';
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