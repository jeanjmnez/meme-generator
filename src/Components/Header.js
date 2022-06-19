import trollface from "../images/troll-face.png";

const Header = (props) => {
  return (
    <header className="header">
      <img src={trollface} className="header--image" alt="troll face" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Meme Generator</h4>
    </header>
  );
};

export default Header;
