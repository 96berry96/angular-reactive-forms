import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-reactive-forms';

  reactiveForm: FormGroup;

  ngOnInit(): void {
      this.reactiveForm = new FormGroup({
        firstname: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.email, Validators.required]),
        username: new FormControl(''),
        dob: new FormControl(''),
        gender: new FormControl('male'),
        address: new FormGroup({
          street: new FormControl('', Validators.required),
          country: new FormControl('India', Validators.required),
          city: new FormControl(''),
          region: new FormControl(''),
          postal: new FormControl('', Validators.required),
        }),
        skills: new FormArray([
          new FormControl(null, Validators.required),
          new FormControl(null, Validators.required),
          new FormControl(null, Validators.required),
        ])
      })
  }

  OnFormSubmitted(){
    console.log(this.reactiveForm);
    
  }
}
