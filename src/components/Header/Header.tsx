import styled from "styled-components";
import Link from "next/link";

const StyledHeader = styled.header`
  width: 100%;
  font-family: "Montserrat", sans-serif;
  background-color: ${(props) => props.theme.overlay};

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    margin: 0px auto 0px auto;

    li {
      list-style-type: none;
      padding: 1rem;

      h1 {
        margin: 0;
      }

      a {
        color: black;
        text-decoration: none;
        margin: auto;
      }
    }

    .search-container {
      width: 100%;

      form {
        display: flex;
        height: 2rem;
      }

      input {
        width: 100%;
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <nav className="wrapper">
        <ul>
          <li>
            <h1>
              <Link href="/">
                <a>TODO</a>
              </Link>
            </h1>
          </li>
          <li className="search-container">
            <form>
              <input type="text" placeholder="Search" name="search" />
              <button type="submit">Search</button>
            </form>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
