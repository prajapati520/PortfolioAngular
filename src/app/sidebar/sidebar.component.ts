import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {}

// export class SidebarComponent implements OnInit {
//   constructor(private router: Router) {}
//   ngOnInit(): void {
//     this.router.navigate(['/about']);
//   }
// }
