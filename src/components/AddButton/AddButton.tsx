import styled from "styled-components";

const StyledButton = styled.button.attrs((props) => ({ type: "submit" }))`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text_light};
`;

const AddButton = ({ onClickHandler }: any) => (
  <StyledButton onClick={onClickHandler}>Add</StyledButton>
);

export default AddButton;
