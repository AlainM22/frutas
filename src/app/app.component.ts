import { Component } from '@angular/core';
import { LoginService } from './providers/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private loginService: LoginService, private router: Router){
    console.trace('AppComponent constructor');
  }

  ngOnInit() {
    console.trace('AppComponent ngOnInit');
  }
}
