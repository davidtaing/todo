import React, { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../../features/todos/todosSlice";
import styled from "styled-components";
import DeleteButton from "../DeleteButton/DeleteButton";

const StyleDiv = styled.div`
  margin: 0.5rem auto;

  form {
    display: flex;
    height: 2rem;
  }

  .checkbox {
    height: 100%;
  }

  .textbox {
    width: 100%;
    font-size: 1.5em;
  }
`;

const Todo = ({ id, title, completed }: any) => {
  // State & Dispatch
  const [titleText, setTitleText] = useState(title);
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();

  // Handlers
  const onSubmitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
  };
  const onTextboxChange = (event: SyntheticEvent) => {
    setTitleText((event.target as HTMLTextAreaElement).value);
  };
  const onDeleteClick = (event: SyntheticEvent) => {
    dispatch(deleteTodo(id));
  };
  const onCheckHandler = (event: SyntheticEvent) => {
    setChecked(!checked);
  };

  return (
    <StyleDiv>
      <form onSubmit={onSubmitHandler}>
        <input
          className="checkbox"
          type="checkbox"
          checked={checked}
          onChange={onCheckHandler}
        />
        <input
          className="textbox"
          type="text"
          value={titleText}
          onChange={onTextboxChange}
        />
        <DeleteButton onClickHandler={onDeleteClick} completed={checked} />
      </form>
    </StyleDiv>
  );
};

export default Todo;
