import { Component, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],

})
export class LayoutComponent implements OnInit {
  @Input() title: string;

  toggleMenu: boolean = false;
  showMinisidebar: Boolean = false;
  public innerWidth: any;
  constructor() { }
  customTrigger;
  ngOnInit(): void {
    console.log(this.toggleMenu, 893)
  }

  toggleMenuEvent(event) {

    this.adjustments(event)

    this.showMinisidebar = !this.showMinisidebar;


  }
  adjustments(event) {
    
    if(event){
      
      return 'hideLabels'
    }else{
 
      return 'showLabels'
    }

  }


  

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event);
    this.innerWidth = window.innerWidth;
    
  }


  toggleSidebar() {
    this.showMinisidebar = !this.showMinisidebar;
  }

}
