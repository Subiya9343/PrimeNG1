import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-personal-d',
  templateUrl: './personal-d.component.html',
  styleUrls: ['./personal-d.component.css'] // Fixed the typo here
})
export class PersonalDComponent implements OnInit { // Added the implementation of OnInit

  constructor(private fb: FormBuilder){ }
  personalDetails: FormGroup;
  cities: City[];

  ngOnInit(){
    this.personalDetails = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      date: ['', Validators.required],
      gender: ['', Validators.required],
      work: [''],
      checked:['']
    });

    // Moved cities assignment here
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
      { name: 'India', code: 'IND' }
    ];
  }
}
