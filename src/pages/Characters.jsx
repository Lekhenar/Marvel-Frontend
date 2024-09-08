import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ComicsCharacter from "./ComicsCharacter";
import Loading from "./Loading";

const Characters = ({ search, setFav, fav }) => {
  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(true);
  const [page, setPage] = useState(0);

  const addToFav = (character) => {
    let favs = localStorage.getItem("favorite"); // getItem c'est pour recupérer le Item favorite
    if (!favs) favs = [];
    else favs = JSON.parse(favs); // convertis le texte en objet

    // filtrer les doublons
    favs = favs.filter((c) => {
      // .filter va retirer toutes les valeurs qui ne respecte pas la condition de retour, comme un filtre
      return c._id != character._id; // Lorsqu'on clic sur une affiche il va passer tous les éléments qui sont != de l'id du (comic._id° qu'on vient de cliquer
    });
    favs = [...favs, character]; // j'ajoute un nouveau tableau comic au tableau Favoris
    setFav(favs);
    localStorage.setItem(
      // setItem c'est pour modifier la valeur de l'Item
      "favorite",
      JSON.stringify(favs) //convertis un objet en texte
    );
    document.getElementById("favorite").classList.remove("close"); // document donne accès au DOM et getElementbyId permet de récupérer un élément via un ID
    document.getElementById("favorite").classList.add("open");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log("Test");
        const response = await axios.get(
          `https://site--marvel-backend--txmznz4727cw.code.run/characters?name=${search}&page=${page}`
        );
        // console.log(response.data);

        setData(response.data);
        setisLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    setisLoading(true);
    fetchData();
  }, [search, page]);
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <main className="character-container">
        {data.results.map((character) => {
          // console.log(character);
          return (
            <div className="block-container" key={character._id}>
              <div className="img-heart">
                <Link to={"/comics/" + character._id}>
                  <img
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt=""
                  />
                </Link>
                <div className="heartBtn">
                  {fav != null &&
                  fav.find((value) => value._id == character._id) ? (
                    <i
                      onClick={
                        () =>
                          setFav(
                            fav.filter((value) => character._id != value._id)
                          ) // filtrer les element dont l'id est different de l'id du character
                      }
                      className="fa-solid fa-heart"
                    ></i>
                  ) : (
                    <i
                      className="fa-regular fa-heart"
                      onClick={() => addToFav(character)}
                    ></i>
                  )}
                </div>
              </div>

              <div className="text-description">
                <h2>{character.name}</h2>
                <p>{character.description}</p>
              </div>
            </div>
          );
        })}
      </main>

      <div className="pagination">
        <a href="#" onClick={() => setPage(page == 0 ? 0 : page - 1)}>
          {"<< Previous"}
        </a>
        <p>{page}</p>
        <a href="#" onClick={() => setPage(page + 1)}>
          {"Next >>"}
        </a>
      </div>
    </>
  );
};

export default Characters;
