import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];

  constructor() { }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),

    email: new FormControl('', [Validators.required, Validators.email]),

    role: new FormControl('', Validators.required),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      username: '',
      email: '',
      role: '',
      password: '',
    });
  }
  ngOnInit() {}
}