const Header = () => {
  return (
    <>
      <section className="header-home">
        <a href="/" className="logo">
          <img src="/logo.svg" width={66} height={71} />
          <svg height="18" width="49">
            <use href="src/assets/icons.svg#logo-slim"></use>
          </svg>
          <svg height="18" width="49">
            <use href="src/assets/icons.svg#logo-mom"></use>
          </svg>
        </a>
        <svg width="2" height="32">
          <use href="src/assets/icons.svg#div-line"></use>
        </svg>
        <nav>
          <ul className="menu-line">
            <li>
              <a href="#">sign in</a>
            </li>
            <li>
              <a href="#">register</a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};
export default Header;
