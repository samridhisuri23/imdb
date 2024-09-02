import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Movies from "../components/Movies";
import { Outlet } from "react-router";
export default function Main() {
  const [top10, setTop10] = useState([]);
  useEffect(() => {
    async function fetchTop10() {
      {
      }

      const url = "https://imdb188.p.rapidapi.com/api/v1/getWeekTop10";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "5809b0f241msh5f8f593e5763047p15f6d6jsn57e53939a570",
          "X-RapidAPI-Host": "imdb188.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setTop10(result.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTop10();
  }, []);

  //console.log(top10);

  return (
    <div className="p-2">
      <Banner />
      <Movies movies={top10} />
    </div>
  );
}
