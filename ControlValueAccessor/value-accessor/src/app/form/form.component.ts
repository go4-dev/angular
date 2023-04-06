import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  myForm!: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      customInput: new FormControl("", Validators.required)
    })
  }

  onSubmit(): void {
    console.log(this.myForm.value);
  }
}
