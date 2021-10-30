import React, { SyntheticEvent, useState } from "react";
import styled from "styled-components";

const StyleDiv = styled.div`
  margin: 0.5rem auto;

  form {
    display: flex;
    height: 2rem;
  }

  .textbox {
    width: 100%;
    font-size: 2em;
  }

  button {
    background-color: ${(props) => props.theme.danger};
    color: ${(props) => props.theme.text_light};
  }
`;

const Todo = ({ title, completed }: any) => {
  const [titleText, setTitleText] = useState(title);
  const [checked, setChecked] = useState(completed);
  const onSubmitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
  };
  const onTextboxChange = (event: SyntheticEvent) => {
    setTitleText((event.target as HTMLTextAreaElement).value);
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
        <button className="delete" type="button">
          Delete
        </button>
      </form>
    </StyleDiv>
  );
};

export default Todo;
