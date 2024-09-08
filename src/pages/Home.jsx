import axios from "axios";
import { useEffect, useState } from "react";
import iron from "../assets/img/Iron.png";
import marvelComic from "../assets/img/header-im.jpg";
import spider from "../assets/img/spiderman.jpg";
import spiderman from "../assets/img/spider.png";
import cover1 from "../assets/img/IronMan_Poster1.webp";
import cover2 from "../assets/img/ironMan_2.jpg";
import cover3 from "../assets/img/ironMan_poster3.jpg";
import cover4 from "../assets/img/spiderman1.jpg";
import cover5 from "../assets/img/spiderman2.jpg";
import cover6 from "../assets/img/spiderman3.jpg";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log("Test");
        const response = await axios.get(`http://localhost:3000/characters`);
        // console.log(response.data);

        setData(response.data);
        setisLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <img className="avengers" src={marvelComic} alt="" />
      <div className="col-1">
        <div className="hero-container iron-container">
          <img className="iron-man" src={iron} alt="Iron-Man" />
        </div>
        <div className="col-2">
          <h1>IRON MAN</h1>
          <p>
            Au début de sa carrière de super-héros, Tony Stark avait pour
            principale occupation de lutter contre les communistes dans le
            contexte de la guerre froide, de manière beaucoup plus systématique
            que les autres personnages de Marvel Comics. Ce cadre historique a
            progressivement disparu, au profit d'aventures de science-fiction.
            Le contexte de la série Iron Man a ensuite continué d'évoluer avec
            les années, le personnage affrontant en majorité des menaces de type
            technologique.
          </p>
          <div className="image-cover">
            <div className="aa">
              <div>
                <img src={cover1} alt="" />
                <h2>IRON MAN</h2>
              </div>
              <div>
                <img src={cover2} alt="" />
                <h2>IRON MAN 2</h2>
              </div>
              <div>
                <img src={cover3} alt="" />
                <h2>IRON MAN 3</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="spider" src={spider} alt="" />
      <div className="col-1">
        <div className="col-2">
          <h1>SPIDER MAN</h1>
          <p>
            Lors de sa première apparition dans Amazing Fantasy, Spider-Man est
            l'identité que se choisit le jeune Peter Parker après avoir été
            mordu par une araignée radioactive et découvert qu'il avait à cette
            occasion développé des super-pouvoirs. Le succès de ce numéro permet
            à Spider-Man d'avoir dès 1963 sa propre série, The Amazing
            Spider-Man..
          </p>
          <div className="image-cover">
            <div className="aa">
              <div>
                <img src={cover4} alt="" />
                <h2>SPIDER MAN</h2>
              </div>
              <div>
                <img src={cover5} alt="" />
                <h2>SPIDER MAN 2</h2>
              </div>
              <div>
                <img src={cover6} alt="" />
                <h2>SPIDER MAN 3</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-container spider-container">
          <img className="iron-man" src={spiderman} alt="Spider-Man" />
        </div>
      </div>
    </div>
  );
};

export default Home;
