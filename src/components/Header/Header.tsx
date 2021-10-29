import styled from "styled-components";
const StyledHeader = styled.header`
  width: 100%;
  font-family: "Montserrat", sans-serif;

  ul {
    display: flex;
    margin: 0px auto 0px auto;
  }

  li {
    list-style-type: none;
    padding: 1rem;
  }

  h1 {
    margin: 0;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="wrapper">
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
      </div>
    </StyledHeader>
  );
};

export default Header;
