import './App.css';
import { CreateTodoButton } from './Components/CreateTodoButton';
import { TodoCounter } from './Components/TodoCounter';
import { TodoItem } from './Components/TodoItem';
import { TodoList } from './Components/TodoList';
import { TodoSearch } from './Components/TodoSearch';

const todos = [
  {text:'Cortar cebolla', completed: true},
  {text:'Tomar el curso de React', completed: false},
  {text:'Llorar con la llorona', completed: false},
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
