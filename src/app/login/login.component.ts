import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  msg = '';
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'user': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      return
    }
    this.auth.login(this.loginForm.value).subscribe((data) => {
      if (data.success) {
        console.log('successfully submitted');
        this.router.navigateByUrl('/home')
        console.log("submitted")
      }
    }, (error) => {
      console.log(error);
    })
  }


  register(){
    this.router.navigateByUrl('/register')
  }
}
