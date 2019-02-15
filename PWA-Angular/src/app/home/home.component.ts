import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {MatTableDataSource, MatSort} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;

  users : any;  
  displayedColumns: string[] = ['select', 'name', 'email', 'cpf', 'telefone'];
  dataSource;
  data;
  selection = new SelectionModel<Element>(true, []);


  constructor(
    public authService: AuthService
  ) { 
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.users = this.authService.GetUser();
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.sort = this.sort;
    this.data = Object.assign(this.users);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  removeSelectedRows() {
    this.selection.selected.forEach(item => {
      let index: number = this.data.findIndex(d => d === item);
      this.removeUser(index);
    });
    this.selection = new SelectionModel<Element>(true, []);
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  removeUser(index){
    this.authService.DeleteUser(index);
    this.getUsers();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
