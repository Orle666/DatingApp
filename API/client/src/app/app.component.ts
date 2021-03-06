import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The DatingApp';
  users : any; // ovo znaci da moze biti bilo koji tip podatka.

constructor(private http: HttpClient) {}

  ngOnInit() {
    //throw new Error('Method not implemented.');
    this.getUsers();
  } 	    

  getUsers() {

    this.http.get('https://localhost:5001/api/users').subscribe(response =>{
      this.users = response;
    },
    error =>{
      console.log(error);
    }
    ) //ovo je OBSERVABLE, tj. mora se neko subscribati da gleda na njih, inace ne rade nista

  }

}
