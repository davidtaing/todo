import styled from "styled-components";
const StyledHeader = styled.header`
  ul {
    display: flex;
  }

  li {
    list-style-type: none;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <ul>
        <li>
          <h1>
            <a href="">TODO</a>
          </h1>
        </li>
        <li className="search-container">
          <form>
            <input type="text" placeholder="Search" name="search" />
            <button type="submit">Search</button>
          </form>
        </li>
        <li>
          <a href="login">login</a>
        </li>
        <li>
          <a href="register">register</a>
        </li>
      </ul>
    </StyledHeader>
  );
};

export default Header;
