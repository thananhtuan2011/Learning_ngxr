import { GoogleAuthProvider } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth,private router:Router) { }


  logout()
  {
    this.fireauth.signOut().then(()=>
    {
      localStorage.removeItem("User");
      this.router.navigateByUrl("/login")
    });
  }
  LoginWithGoogle()
  {
    this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res=>
      {
        console.log("RESS",res)
        this.router.navigateByUrl("/student");
        localStorage.setItem("User",JSON.stringify(res.user))
      }).catch()
      {
      }
  }
}
