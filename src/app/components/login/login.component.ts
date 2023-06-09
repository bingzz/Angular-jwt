import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  submitForm() {
    if (this.form.invalid) return;

    this.authService
      .login(this.form.get('username')?.value, this.form.get('password')?.value)
      .subscribe((response) => {
        this.router.navigate(['/dashboard']);
      })
  }
}
