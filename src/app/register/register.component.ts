import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthenticationService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Gender: ['', Validators.required],
      MobileNumber: ['', Validators.required],
      emailId: ['', Validators.pattern(this.emailRegex)],
      Designation: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  validation_messages = {
    Name: [{ type: 'required', message: 'Name Field Required' }],
    Gender: [
      { type: 'required', message: 'Gender  Required' },
    ],
    MobileNumber: [
      { type: 'required', message: 'phone nunber required' },
    ],
    emailId: [
      { type: 'required', message: 'email required' },
      { type: 'pattern', message: 'valid email required' }
    ],

    Designation: [
      { type: 'required', message: 'Desigination filed required' }
    ],
    password: [
      { type: 'required', message: 'password field required' }
    ]
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return
    }
    this.auth.register(this.registerForm.value).subscribe((data) => {
      console.log(data);
      if(data.success){
        this.router.navigate(['/home'])
      }
    })
    console.log(this.registerForm.value);
  }

}
