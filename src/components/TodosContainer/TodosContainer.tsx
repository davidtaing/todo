import Todo from "../Todo/Todo";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import TodoObject from "../../features/todos/TodoObject";

const TodosContainer = () => {
  const todos: Array<TodoObject> = useSelector(
    (state: RootState) => state.todos
  );

  return (
    <div>
      {todos.map((props) => {
        return <Todo key={props.id} {...props} />;
      })}
    </div>
  );
};

export default TodosContainer;
