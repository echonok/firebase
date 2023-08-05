import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'create-user',
  templateUrl: 'create-user.component.html',
  styleUrls: ['create-user.component.css']
})
export class CreateUserComponent {

  form = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    admin: [false]
  });

  constructor(
    private fb: FormBuilder,
  ) {

  }

  onCreateUser() {

    const user = this.form.value;

    console.log(user);

  }

}
