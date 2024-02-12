import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  public userNameCtrl = new FormControl('', [Validators.required]);
  public passwordCtrl = new FormControl('', [Validators.required]);
  public loginFormGroup = new FormGroup({});

  constructor(private authService: AuthenticationService) {}

  public loginUser(): void {
    if (this.userNameCtrl.value && this.passwordCtrl.value) {
      this.authService.login(this.userNameCtrl.value, this.passwordCtrl.value);
    }
  }

}
