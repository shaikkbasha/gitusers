import { Component, OnInit } from '@angular/core';
import { DropdownListService } from '../dropdown-list.service';
import { FormControl ,FormGroup,} from '@angular/forms';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.sass']
})
export class DropdownListComponent implements OnInit {
  createAccountForm: FormGroup;
  countries: {};
  states: {};
  cities: {};

  constructor(private cscService: DropdownListService) { }

  ngOnInit() {
    this.cscService.getCountries().subscribe(
      data => this.countries = data
    );

    this.createAccountForm = new FormGroup({
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl('')
    });
  }

  onChangeCountry(countryId: number) {
    if (countryId) {
      this.cscService.getStates(countryId).subscribe(
        data => {
          this.states = data;
          this.cities = null;
        }
      );
    } else {
      this.states = null;
      this.cities = null;
    }
  }

  onChangeState(stateId: number) {
    if (stateId) {
      this.cscService.getCities(stateId).subscribe(
        data => this.cities = data
      );
    } else {
      this.cities = null;
    }
  }

}
