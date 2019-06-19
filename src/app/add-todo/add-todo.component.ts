import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Input() addTodo: any;

  tempData = '';

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

    this.addTodo({
      id: creation + extention,
      data: this.tempData
    });

    // console.log(this.tempData);

    f.resetForm();
  }
}
