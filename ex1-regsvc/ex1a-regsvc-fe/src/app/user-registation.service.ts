import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserRegistationService {
 
  public shoppingCart:string[] = [];

  constructor(private http:HttpClient) { }

	baseUrl:string = "http://localhost:8080/";
//	baseUrl:string = "http://18.191.192.57:8080/"
	
  public doRegistration(user:User){
    return this.http.post(`${this.baseUrl}register`,user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get(`${this.baseUrl}getAllUsers`);
  }

  public getUserByEmail(email:string){
    return this.http.get(`${this.baseUrl}findUser/${email}`);
  }

  public deleteUser(id:number){
    return this.http.delete(`${this.baseUrl}cancel/${id}`);
  }
}
