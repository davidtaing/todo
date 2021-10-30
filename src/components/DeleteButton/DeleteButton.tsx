import styled from "styled-components";

const StyledButton = styled.button.attrs((props) => ({ type: "submit" }))`
  background-color: ${(props) => props.theme.danger};
  color: ${(props) => props.theme.text_light};
`;

const DeleteButton = ({ completed, onClickHandler }: any) => (
  <StyledButton hidden={!completed} onClick={onClickHandler}>
    Delete
  </StyledButton>
);

export default DeleteButton;
