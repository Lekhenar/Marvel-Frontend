import axios from "axios";
import { useEffect, useState } from "react";
import marvelFooter from "../assets/img/marvel-footer.png";

const Footer = () => {
  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log("Test");
        const response = await axios.get(
          `https://site--marvel-backend--txmznz4727cw.code.run/characters`
        );
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
    <>
      <footer>
        <img src={marvelFooter} alt="" />
      </footer>
    </>
  );
};

export default Footer;
