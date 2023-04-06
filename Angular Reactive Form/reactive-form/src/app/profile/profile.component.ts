import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.userForm = new FormGroup({
      fName: new FormControl("", Validators.required),
      lName: new FormControl("", Validators.required),
      age: new FormControl("", Validators.required)
    })
  }

  onSubmit(): void {
    console.log(this.userForm.value);
  }
}