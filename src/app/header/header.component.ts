import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggleMenu: boolean = false;
  @Output() toggleMenuEvent = new EventEmitter<any>();
  constructor(
    private auth : AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  toggleMenuFunc(){
    this.toggleMenu = !this.toggleMenu;
    console.log(this.toggleMenu)
    this.toggleMenuEvent.emit(this.toggleMenu);
  }

  logout(){
    this.auth.logout()
  }
}
