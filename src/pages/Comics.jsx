import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Comics = ({ search, setFav, fav }) => {
  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(true);
  const [page, setPage] = useState(0);

  const addToFav = (comic) => {
    let favs = localStorage.getItem("favorite"); // getItem c'est pour recupérer le Item favorite
    if (!favs) favs = [];
    else favs = JSON.parse(favs); // convertis le texte en objet
    // filtrer les doublons
    favs = favs.filter((c) => {
      // .filter va retirer toutes les valeurs qui ne respecte pas la condition de retour, comme un filtre
      return c._id != comic._id; // Lorsqu'on clic sur une affiche il va passer tous les éléments qui sont != de l'id du (comic._id° qu'on vient de cliquer
    });
    favs = [...favs, comic]; // j'ajoute un nouveau tableau comic au tableau Favoris
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
          `https://site--marvel-backend--txmznz4727cw.code.run/comics?title=${search}&page=${page}`
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
  console.log(page);
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <main className="comics-container">
        {data.results.map((comic) => {
          // console.log(comic);
          return (
            <div className="block-container" key={comic._id}>
              <div className="img-heart">
                <img
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt=""
                />

                <div className="heartBtn">
                  {fav != null &&
                  fav.find((value) => value._id == comic._id) ? (
                    <i
                      onClick={
                        () =>
                          setFav(fav.filter((value) => comic._id != value._id)) // filtrer les element dont l'id est different de l'id du comic
                      }
                      className="fa-solid fa-heart"
                    ></i>
                  ) : (
                    <i
                      className="fa-regular fa-heart"
                      onClick={() => addToFav(comic)}
                    ></i>
                  )}
                </div>
              </div>

              <div className="text-description">
                <h2>{comic.title}</h2>
                <p>{comic.description}</p>
              </div>
            </div>
          );
        })}
        {/* </div> */}
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

export default Comics;
