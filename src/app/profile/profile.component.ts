import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
 profile:any;
 repos:any;
 username:any;
  constructor(private ss:ProfileService) {



   }
findSerialNumber(){
  this.ss.updateSerial(this.username)
  this.ss.getProfile().subscribe((data)=>{
    this.profile=data;  
    console.log(data);
    this.ss.getrepos().subscribe((data)=>{
      this.repos= data;
    })
     })
    
}
  ngOnInit() {
  }

}
