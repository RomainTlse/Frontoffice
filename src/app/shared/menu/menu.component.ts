import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuService} from '../../services/menu.service';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() outputChild = new EventEmitter<string>();

  private activeMenu: string;

  faHome = faHome;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.activeMenu = this.menuService.getMenu();
  }

  loadComponent(component) {
    this.outputChild.emit(component);
    this.menuService.setMenu(component);
    this.activeMenu = this.menuService.getMenu();
  }
}
