import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(public authSservice: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authSservice.login(this.model).subscribe(next => {
    this.alertify.success('Logged in');
    }, error => {
    this.alertify.error('Login Error'); // NEED TO CHANGE
    }, () => {
    this.router.navigate(['/members']);
    });
  }

  loggedin() {
    // const token = localStorage.getItem('token');
    // return !!token;
    return this.authSservice.loggedIn();
  }
  loggedout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }
}
