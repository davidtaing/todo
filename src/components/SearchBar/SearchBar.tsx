import { SyntheticEvent, useContext } from "react";
import styled from "styled-components";

import { SearchContext } from "../../context/SearchContext";

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  height: 2rem;

  input {
    width: 100%;
  }
`;

const SearchBar = () => {
  const { searchFilter, setSearchFilter } = useContext(SearchContext);
  const onTextInputHandler = (event: SyntheticEvent) => {
    setSearchFilter((event.target as HTMLInputElement).value);
  };

  return (
    <StyledForm onSubmit={(event) => event.preventDefault()}>
      <input
        type="text"
        placeholder="Search"
        name="search"
        value={searchFilter}
        onChange={onTextInputHandler}
      />
    </StyledForm>
  );
};

export default SearchBar;
