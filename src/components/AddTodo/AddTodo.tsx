import styled from "styled-components";
import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todos/todosSlice";
import AddButton from "../AddButton/AddButton";

const StyledDiv = styled.div`
  form {
    display: flex;
    height: 2rem;

    input {
      width: 100%;
      font-size: 1.5em;
    }

    button {
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.text_light};
    }
  }
`;

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const onTextInput = (event: SyntheticEvent) => {
    setTitle((event.target as HTMLTextAreaElement).value);
  };

  const onSubmitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(addTodo(title));
  };

  return (
    <StyledDiv className="addTodo">
      <form onSubmit={onSubmitHandler}>
        <input
          className="todo-title"
          type="text"
          placeholder="I want to..."
          value={title}
          onChange={onTextInput}
        />
        <AddButton />
      </form>
    </StyledDiv>
  );
};

export default AddTodo;
