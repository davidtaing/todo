import { SyntheticEvent } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  grid-template-columns: 1fr auto;

  form {
    display: flex;
    height: 2rem;
  }

  input {
    width: 100%;
    font-size: 1.5em;
  }

  button {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.text_light};
  }
`;

const Footer = () => {
  const onSubmitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <StyledFooter className="wrapper">
      <div className="addTodo">
        <form onSubmit={onSubmitHandler}>
          <input type="text" placeholder="I want to..." />
          <button type="submit">Add</button>
        </form>
      </div>
    </StyledFooter>
  );
};

export default Footer;
