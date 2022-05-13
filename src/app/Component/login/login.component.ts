import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String= '';
  password:String= '';
  user:any;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {}

  onLoginSubmit(){
    const user = {
      username : this.username,
      password : this.password,
    };
    this.authService.authenticateUser(user).subscribe(data=>{
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        Swal.fire({title:"You're Now Logged In, Thank You!!", icon:"success", timer:4000});
        this.router.navigate(['/dashboard']);
        console.log(data.user);
        
      }else{
        Swal.fire({title:data.msg,icon:"error",timer:4000});
        this.router.navigate(['/login'])
      }
      
    })
    
  }

}
