import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      password: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
      aliases: this.fb.array([
        this.fb.control('')
      ])
    }
  );

  get aliases(): any {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private fb: FormBuilder) {
  }

  // is not used
  addAlias(): void {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit(): void {
    console.warn(this.profileForm.value);
  }

  ngOnInit(): void {
  }
}
