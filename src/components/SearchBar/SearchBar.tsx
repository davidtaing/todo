import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  height: 2rem;

  input {
    width: 100%;
  }
`;

const SearchBar = () => {
  return (
    <StyledForm onSubmit={(event) => event.preventDefault()}>
      <input type="text" placeholder="Search" name="search" />
      <button type="submit">Search</button>
    </StyledForm>
  );
};

export default SearchBar;
