import { Component, Input, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '', title: 'Get User',  icon:'person', class: '' },
    { path: '/my-applications', title: 'Applications',  icon:'content_paste', class: '' },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headerTitle: string | undefined;
  public menuItems: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
