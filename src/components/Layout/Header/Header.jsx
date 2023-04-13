import "./HeaderStyle.scss";

const Header = () => {
  return (
    <header>
      <div className="header-text-wrapper">
        <div className="header-name-wrapper">
          <span className="header-lastName">Alexandru</span>
          <span className="header-firstName">{`<Balint/>`}</span>
        </div>
        <span className="header-secondary">{`{ Front-end developer }`}</span>
      </div>
    </header>
  );
};
export default Header;
