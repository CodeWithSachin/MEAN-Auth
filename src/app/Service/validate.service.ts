import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  constructor( ) {}

  validateRegister(user: any) {
    if (
      user.name == undefined ||
      user.email == undefined ||
      user.username == undefined ||
      user.password == undefined
    ) {
      return false;
    } else {
      return true;
    }
  }
  validateEmail(email:any) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
// 
  
}