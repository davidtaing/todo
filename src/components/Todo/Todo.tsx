import React, { SyntheticEvent, useState } from "react";
import styled from "styled-components";

const StyleDiv = styled.div`
  margin: 0.5rem auto;

  .textbox {
    width: 100%;
    font-size: 2em;
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
          className="textbox"
          type="text"
          value={titleText}
          onChange={onTextboxChange}
        />
        <input
          className="checkbox"
          type="checkbox"
          checked={checked}
          onChange={onCheckHandler}
        />
      </form>
    </StyleDiv>
  );
};

export default Todo;
