import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  constructor() { }
  resgisterForm: any;

  ngOnInit(): void {
    this.resgisterForm = new FormGroup({
      "firstname": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "lastname": new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      "emailid": new FormControl(null, [Validators.required, Validators.email]),
      "Mobile Number": new FormControl(null, [Validators.required, Validators.pattern( '[0-9]*')])
    });
  }
  submitData() {
    console.log(this.resgisterForm.value);
  }


  get firstname() { return this.resgisterForm.get('firstname'); }
  get lastname() { return this.resgisterForm.get('lastname'); }
  get emailid() { return this.resgisterForm.get('emailid'); }
  get MobileNumber() { return this.resgisterForm.get('Mobile Number'); }


  countryList=[
    {"countryname":"India"},
    {"countryname":"America"},
    {"countryname":"Austrlia"}
  ];

}
