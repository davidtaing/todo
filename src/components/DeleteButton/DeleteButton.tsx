import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.danger};
  color: ${(props) => props.theme.text_light};
`;

const DeleteButton = ({ completed, onClickHandler }: any) => (
  <StyledButton type="button" hidden={!completed} onClick={onClickHandler}>
    Delete
  </StyledButton>
);

export default DeleteButton;
