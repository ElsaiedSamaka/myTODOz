import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import TodoItem from "./TodoItem";
export default function TodoList(props) {
  const { todos } = useContext( GlobalContext );
  const { removeTodo } = useContext( GlobalContext );
   const deleteTodo = (id) => {
    removeTodo(id)
  }

  return (
    <div className='row mx-1 px-5 pb-3 w-80'>
      <div className='col mx-auto'>
        <ol>
          {todos.map((todo, i) => (
            <li key={todo.id}>
              <TodoItem todo={todo}  onDelete={deleteTodo}/>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
