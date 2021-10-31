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
      {todos.map(({ id, title, completed }) => {
        return <Todo key={id} title={title} completed={completed} />;
      })}
    </div>
  );
};

export default TodosContainer;
