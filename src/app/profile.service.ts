import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  constructor(private hc:HttpClient) { 
    console.log("this is profile service");
    this.username = "kirandash"
  }
  getProfile(){
console.log("===================>saleem")
    return this.hc.get("https://api.github.com/users/"+this.username);
    //.map (res =>res.json());
  }
  getrepos(){
    console.log("===================>saleem")
        return this.hc.get("https://api.github.com/users/"+this.username+"/repos");
        //.map (res =>res.json());
      }
      updateSerial(username:string){
         this.username = username;
      }
}
