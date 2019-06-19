import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todos';

  state = {
    todos: []
  };

  // constructor() {
  //   console.log('started');
  // }

  ngOnInit() {
    if (localStorage.atodos) {
      this.state = JSON.parse(localStorage.getItem('atodos'));
    } else {
      this.state = {
        todos: []
      };
      localStorage.setItem('atodos', JSON.stringify(this.state));
    }
    console.log('started');
  }

  addTodo = (todo: any) => {
    this.state.todos.push(todo);
    localStorage.setItem('atodos', JSON.stringify(this.state));
    // tslint:disable-next-line: semicolon
  };

  deleteTodo = (id: any) => {
    // console.log('del');
    const tempTodos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.state.todos = tempTodos;
    localStorage.setItem('atodos', JSON.stringify(this.state));
    // tslint:disable-next-line: semicolon
  };
}
