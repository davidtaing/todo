import { SyntheticEvent } from "react";
import styled from "styled-components";
import AddButton from "../AddButton/AddButton";

const StyledFooter = styled.footer`
  position: fixed;
  background-color: ${(props) => props.theme.overlay};
  padding: 1rem;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  margin-bottom: 0px;

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

const Footer = () => {
  const onSubmitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <StyledFooter>
      <div className="wrapper">
        <div className="addTodo">
          <form onSubmit={onSubmitHandler}>
            <input type="text" placeholder="I want to..." />
            <AddButton />
          </form>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
