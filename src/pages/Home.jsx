import { Link } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    apiPoke(count);
  }, []);

  function apiPoke(count) {
    axios
      .get(`http://localhost:3000/movies`)
      .then((response) => {
        console.log(response.data.videos);
        setData(response.data.videos);
        setShow(true);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
      });
  }

  return (
    <div>
      <h1>Meus videos</h1>
      <div className="pokemons">
        {show ? (
          <div className="image-list">
            {data.map((movie, index) => (
                <Link to={`${movie.id}`}>
              <div key={index}>
                <h1>{movie.nome}</h1>
                <h1>{movie.id}</h1>
                
              </div>
                </Link>
            ))}
          </div>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
}
////
