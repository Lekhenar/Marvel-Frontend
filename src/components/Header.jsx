import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Header = ({ search, setSearch }) => {
  // const [search, setSearch] = useState("");
  const navigate = useNavigate();
  let searchAndNavigate = (event) => {
    setSearch(event.target.value);
    navigate("/characters");
  };

  return (
    <header>
      <div className="container">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="Marvel-logo" />
          </Link>
        </div>
        <input
          className="search"
          type="search"
          placeholder="Search"
          value={search}
          onChange={searchAndNavigate}
        />
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to={"./characters"}>
            <button>Characters</button>
          </Link>
          <Link to={"./comics"}>
            <button>Comics</button>
          </Link>
          <Link to={"./favoris"}>
            <button>Favoris</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
