import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { APP_PROVIDERS } from './provider-config/app-providers';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    MatToolbarModule,
  ],
  providers: [...APP_PROVIDERS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Products Demo';

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
  ) {
    this.userService.getAuthUser().subscribe(
      user => {
        console.log(user);
      }
    )
  }
}
