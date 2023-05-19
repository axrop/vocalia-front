import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: any; 


  constructor() { }

  ngOnInit(): void {
  }


  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  // Método para enviar el formulario
  onSubmit() {
    if (this.loginForm.valid) {
      // Lógica para enviar los datos del formulario
      console.log(this.loginForm.value);
    }
  }
}
