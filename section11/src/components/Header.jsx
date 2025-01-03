import "./Header.css";

const Header = ({ title, left, right }) => {
  return (
    <header className="header">
      <div className="left">{left}</div>
      <div className="center">{title}</div>
      <div className="right">{right}</div>
    </header>
  );
};

export default Header;
