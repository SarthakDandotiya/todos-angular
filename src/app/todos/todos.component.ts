import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todos: any;
  @Input() handleDelete: any;
  // exist = true;

  constructor() {}

  ngOnInit() {}

  checkData() {
    if (this.todos.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  deleter = i => {
    this.handleDelete(i);
    // tslint:disable-next-line: semicolon
  };
}
