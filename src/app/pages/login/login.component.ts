import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: any;

  constructor(private serviceLogin : LoginService, private router : Router) { }

  ngOnInit(): void {
  }


  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.nullValidator]),
    password: new FormControl('', [Validators.required, Validators.nullValidator])
  });

  // Método para enviar el formulario
  onSubmit() {
    if (this.loginForm.valid) {
      // Lógica para enviar los datos del formulario
      if( this.loginForm.value.username!=null && this.loginForm.value.password!=null ){
        let resp = this.serviceLogin.login(this.loginForm.value.username, this.loginForm.value.password);
        resp.subscribe(data => {
          this.message = data;
          this.router.navigate(['/home']);
        })
      }
    }
  }



}
