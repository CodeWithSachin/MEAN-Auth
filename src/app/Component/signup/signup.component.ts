import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { ValidateService } from 'src/app/Service/validate.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  name: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  user:any;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
    };
    // email Validation
    if (!this.validateService.validateEmail(user.email)) {
      Swal.fire({
        icon: "error",
        title: "Please Enter Valid Email Id!!",
        timer:4000
      })
      return false
    }else{
      this.authService.registerUser(user).subscribe((data) => {
        if (data.success) {
          Swal.fire({
            icon: "success",
            title: "Registration Successful. Now you can Login",
            timer:4000
          });
          this.router.navigate(['/login']);
        } else {
          Swal.fire({
            icon: "error",
            title: "Registration Failed. Plaese Try Again.",
            timer:4000
          });
          this.router.navigate(['/signup']);
        }
        
      });
      return true
    }
    // Register User
    
  }
}
