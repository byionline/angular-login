import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    username: new FormControl('', Validators.required),

    password: new FormControl('', Validators.required),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      username: '',

      password: '',
    });
  }

  ngOnInit() {}
}