import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import sound from "./assets/musique/Marvel-theme.mp3";
import "./App.css";

// ----  PAGES ----
import Header from "./components/Header";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";
import ComicsCharacter from "./pages/ComicsCharacter";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");
  const [fav, setFav] = useState([]);
  // console.log(search);
  const closeFav = () => {
    document.getElementById("favorite").classList.add("close");
    document.getElementById("favorite").classList.remove("open");
  };

  return (
    <>
      <audio autoPlay id="myAudio">
        <source src={sound} type="audio/mp3" />
      </audio>
      <div id="favorite" className="close">
        <button className="close-container" onClick={() => closeFav()}>
          X
        </button>
        <Favoris fav={fav} setFav={setFav} />
      </div>
      <Router>
        <Header search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/characters"
            element={<Characters setFav={setFav} fav={fav} search={search} />}
          />
          <Route
            path="/comics"
            element={<Comics setFav={setFav} fav={fav} search={search} />}
          />
          <Route
            path="/favoris"
            element={<Favoris fav={fav} setFav={setFav} />}
          />
          <Route path="/comics/:characterId" element={<ComicsCharacter />} />
          {/* <Route path="/characters/:comicId" element={<CharacterComics />} /> */}
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
