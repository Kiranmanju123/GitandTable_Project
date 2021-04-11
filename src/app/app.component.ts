import { Component } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-project';
constructor(private auth:AuthServiceService) {}

// google() {
//     this.auth.loginWithGoogle()
//   }


  github() {
    this.auth.loginWithGitHub()
  }
}
