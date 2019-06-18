import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Input() sendData: any;
  @Output() returnData = new EventEmitter();

  pseudoState = {
    id: null,
    data: null
  };

  constructor() {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    const date = new Date();
    const components = [
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    ];
    const creation = components.join('');

    const extention = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substr(0, 5);

    // this.pseudoState.id = creation + extention;
    // this.pseudoState.data = f.value.data;
    console.log(this.sendData);
    this.sendData.push({ id: creation + extention, data: f.value.data });
    console.log(this.sendData);
    this.returnData.emit(this.sendData);

    // this.addTodo(this.pseudoState);

    console.log('success');

    f.resetForm();
  }
}
