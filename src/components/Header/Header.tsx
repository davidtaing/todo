const Header = () => {
  return (
    <header>
      <ul>
        <li>TODO</li>
        <div className="search-container">
          <form>
            <input type="text" placeholder="Search" name="search" />
            <button type="submit">Search</button>
          </form>
        </div>
        <li>
          <a href="login">login</a>
        </li>
        <li>
          <a href="register">register</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
