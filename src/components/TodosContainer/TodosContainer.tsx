import { useContext } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { SearchContext } from "../../context/SearchContext";
import Todo from "../Todo/Todo";
import TodoObject from "../../features/todos/TodoObject";

const TodosContainer = () => {
  const todos: Array<TodoObject> = useSelector(
    (state: RootState) => state.todos
  );
  const { searchFilter } = useContext(SearchContext);

  return (
    <div>
      {todos
        .filter((props) => props.title.includes(searchFilter))
        .map((props) => {
          return <Todo key={props.id} {...props} />;
        })}
    </div>
  );
};

export default TodosContainer;
