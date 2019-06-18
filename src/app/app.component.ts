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

  gettingData(event) {
    this.state.todos = event;
    console.log(this.state.todos);
  }

  // addTodo = todo => {
  //   console.log('gh', todo);
  //   this.state.todos.push(todo);
  //   // this.state.todos = [...this.state.todos, todo];
  //   // console.log(this.state.todos);
  // };
}
