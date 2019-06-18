import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todos';

  state = {
    todos: [
      {
        id: 1,
        data:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, illum explicabo quae inventore ipsa molestiae?'
      },
      {
        id: 2,
        data:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, illum explicabo quae inventore ipsa molestiae?'
      }
    ]
  };

  addTodo = todo => {
    this.state.todos.push(todo);
    // tslint:disable-next-line: semicolon
  };

  deleteTodo = id => {
    const tempTodos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.state.todos = tempTodos;
    // tslint:disable-next-line: semicolon
  };
}
