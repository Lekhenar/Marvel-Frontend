import { useEffect, useState } from "react";

const Favoris = ({ fav, setFav }) => {
  useEffect(() => {
    let favoris = localStorage.getItem("favorite");
    favoris = favoris ? JSON.parse(favoris) : null;
    console.log(favoris);
    setFav(favoris);
    if (favoris != null && favoris.length > 0) {
      document.getElementById("favorite").classList.add("open");
      document.getElementById("favorite").classList.remove("close");
    }
  }, []);

  if (fav == null || fav.length === 0)
    // si favoris est null ou vide
    return (
      <div className="empty-fav" style={{ height: "75vh" }}>
        <p className="fav-title">Votre liste favoris est vide</p>
      </div>
    );

  const removeFavorite = (comic) => {
    let Favoris = localStorage.getItem("favorite"); // recupere les favoris dans localstorage

    Favoris = Favoris ? JSON.parse(Favoris) : null;
    if (Favoris == null) return;
    Favoris = Favoris.filter((data) => {
      return data._id != comic._id; // filtre le comic que l'on veut supprimer
    });
    localStorage.setItem("favorite", JSON.stringify(Favoris)); // on remet le nouveau tableau  apres l'avoir transformer en chaine de characters
    if (Favoris.length == 0) {
      document.getElementById("favorite").classList.add("close");
      document.getElementById("favorite").classList.remove("open");
    }
    setFav(Favoris);
  };

  return (
    <div style={{ height: "100vh" }}>
      {fav.map((comic) => {
        return (
          <div className="plugin-container" key={comic._id}>
            <h2>
              {comic.title}
              {comic.name}
            </h2>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt=""
              style={{ maxWidth: "150px" }}
            />
            <button
              className="close-btn"
              onClick={() => {
                removeFavorite(comic);
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Favoris;
