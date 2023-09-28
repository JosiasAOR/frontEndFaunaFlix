import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function VideoPlayer() {
  const [videoUrl, setVideoUrl] = useState("");
  const [show, setShow] = useState(false);
  const { id } = useParams(); // Corrigir a desestruturação dos parâmetros

  useEffect(() => {
    // Faça uma solicitação à API para obter a URL do vídeo com base no ID
    axios
      .get(`https://api-faunaflix.onrender.com/movies/${id}`) // Usar o ID da rota na solicitação
      .then((response) => {
        const videoUrlFromApi = response.data;

        console.log(id);
        setVideoUrl(videoUrlFromApi);
        console.log("videoURL>", videoUrl.videoUrl);
        setShow(true)
      })
      .catch((error) => {
        console.error("Erro ao obter a URL do vídeo:", error);
      });
  }, [id]);

  return (
    <div>
       {show && (
      <h1>{videoUrl.video.nome}</h1>
       )}
      {show && (
        
        <video width="400" controls="controls">
          <source src={videoUrl.video.urlvideo} type="video/mp4" />
          Seu navegador não suporta a reprodução de vídeo.
        </video>
      )}
      <button
        onClick={() => {
          console.log(videoUrl.video.urlvideo);
        }}
      >
        MOSTRAR CONSOLE
      </button>
    </div>
  );
}
