import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private activeMenu: string;

  constructor() {
    this.activeMenu = 'home';
  }

  getMenu() {
    return this.activeMenu;
  }

  setMenu(menu: string) {
    this.activeMenu = menu;
  }
}
