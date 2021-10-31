import styled from "styled-components";
import { SyntheticEvent } from "react";
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
  const onSubmitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <StyledDiv className="addTodo">
      <form onSubmit={onSubmitHandler}>
        <input type="text" placeholder="I want to..." />
        <AddButton />
      </form>
    </StyledDiv>
  );
};

export default AddTodo;
