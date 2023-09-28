import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./lista.css";

export default function Lista() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    apiPoke(count);
  }, []);

  function apiPoke(count) {
    axios
      .get(`https://api-faunaflix.onrender.com/movies`)
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
    <div className="container">
      <h1 className="title">Petflix</h1>
      <div className="video-list">
        {show ? (
          <div className="video-grid">
            {data.map((movie, index) => (
              <Link to={`${movie.id}`} key={index} className="video-link">
                <div className="video-card">
                  <img
                    src={movie.banner}
                    alt={`Thumbnail for ${movie.nome}`}
                    className="video-thumbnail"
                  />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="loading">Carregando...</p>
        )}
      </div>
    </div>
  );
}
