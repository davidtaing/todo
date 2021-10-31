import styled from "styled-components";
import AddTodo from "../AddTodo/AddTodo";

const StyledFooter = styled.footer`
  position: fixed;
  background-color: ${(props) => props.theme.overlay};
  padding: 1rem;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  margin-bottom: 0px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="wrapper">
        <AddTodo />
      </div>
    </StyledFooter>
  );
};

export default Footer;
