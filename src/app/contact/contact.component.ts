import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private mailSent = false;
  private mail = {};

  constructor( private http:Http) { }

  ngOnInit() {
  }

  sendMail(){
    console.log(this.mail);
    this.mailSent = true;

    this.http.post('http://mtlinspire.org/test.php',
      this.mail,
      {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .map(res => res.json()).subscribe();
  }
}
