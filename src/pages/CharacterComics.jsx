import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const CharacterComics = () => {
  const [comics, setComics] = useState();
  const [isLoading, setisLoading] = useState(true);

  const { comicId } = useParams();

  useEffect(() => {
    const fetchData = async (req, res) => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--txmznz4727cw.code.run/characters/${comicId}`
        );
        // console.log(response);

        setComics(response.data);
        setisLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [comicId]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <main className="comics-container">
        {/* {data.comics.map((comic) => {
          return (
            <div className="block-container" key={comic._id}>
              <div className="img-heart">
                <img
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt=""
                />
              </div>

              <div className="text-description2">
                <h2>{comic.title}</h2>
              </div>
            </div>
          );
        })} */}
      </main>
    </>
  );
};

export default CharacterComics;
