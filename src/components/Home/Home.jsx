import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import moment from "moment";
import "./Home.css";

export default function () {
  const location = useLocation();

  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");

  const handleNuevoComentario = (event) => {
    setNuevoComentario(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setComentarios([...comentarios, nuevoComentario]);
    setNuevoComentario("");
  };

  const fecha = new Date();

  const videos = [
    {
      id: 1,
      title: "Don't Start Now (Official Music Video)",
      url: "https://www.youtube.com/watch?v=oygrmJFKYZY",
      description:
        "The official music video for Dua Lipa - Don't Start Now Taken from her second studio album 'Future Nostalgia' released in 2020, which featured the hit singles 'Don't Start Now', 'Physical', 'Break My Heart', 'Hallucinate' & 'Levitating' Get the album Future Nostalgia: https://dualipa.co/futurenostalgia",
      link: "dont-start-now",
    },
    {
      id: 2,
      title: "Levitating Featuring DaBaby (Official Music Video)",
      url: "https://www.youtube.com/watch?v=TUVcZfQe-Kw",
      description:
        "The official music video for Dua Lipa - Levitating featuring @DaBaby Taken from her second studio album 'Future Nostalgia' released in 2020, which featured the hit singles 'Don't Start Now', 'Physical', 'Break My Heart', 'Hallucinate' & 'Levitating' Get the album Future Nostalgia : https://dualipa.co/futurenostalgia",
      link: "levitating",
    },
    {
      id: 3,
      title: "Love Again",
      url: "https://www.youtube.com/watch?v=BC19kwABFwc",
      description:
        "The official music video for Dua Lipa – Love Again Stream Love Again: https://dualipa.co/LoveAgain Get the album Future Nostalgia (The Moonlight Edition): https://dualipa.co/FN-MoonlightEdition",
      link: "love-again",
    },
    {
      id: 4,
      title: "New Rules (Official Music Video)",
      url: "https://www.youtube.com/watch?v=k2qgadSvNyU",
      description:
        "The official music video for Dua Lipa - New Rules Taken from her self-titled debut studio album released in 2017, which featured the hit singles 'Be The One', 'IDGAF', 'Hotter Than Hell' & 'New Rules' Subscribe to the Dua Lipa channel for all the best and latest official music videos, behind the scenes and live performances.",
      link: "new-rules",
    },
    {
      id: 5,
      title: "Tiny Desk (Home) Concert",
      url: "https://www.youtube.com/watch?v=F4neLJQC1_E",
      description:
        "he Tiny Desk is working from home for the foreseeable future. Introducing NPR Music's Tiny Desk (home) concerts, bringing you performances from across the country and the world. It's the same spirit — stripped-down sets, an intimate setting — just a different space.",
      link: "tiny-desk",
    },
  ];

  return (
    <div className="main">
      <div className="container-1">
        <h2 className="gallery" style={{ fontFamily: "Mulish, sans-serif" }}>
          Gallery
        </h2>

        {videos.map((video) => (
          <div key={video.id}>
            <a
              href={video.link}
              className="titulos"
              style={{
                fontFamily: "Mulish, sans-serif",
              }}
            >
              {video.title}
            </a>
          </div>
        ))}
      </div>
      <div className="container">
        {videos.map(
          (video) =>
            (location.pathname.slice(1) === video.link ||
              (video.link === "dont-start-now" &&
                location.pathname === "/")) && (
              <div className="video">
                <ReactPlayer
                  url={video.url}
                  controls={true}
                  muted={true}
                  width={window.innerWidth > 900 ? 900 : 200}
                  height={window.innerWidth > 900 ? 500 : 100}
                />
              </div>
            )
        )}
        {videos.map(
          (video) =>
            (location.pathname.slice(1) === video.link ||
              (video.link === "dont-start-now" &&
                location.pathname === "/")) && (
              <div>
                <div>
                  <h4
                    className="nombre"
                    style={{ fontFamily: "Mulish, sans-serif" }}
                  >
                    {video.title}
                  </h4>
                </div>
                <div>
                  <span
                    className="texto"
                    style={{ fontFamily: "Mulish, sans-serif" }}
                  >
                    {video.description}
                  </span>
                </div>
              </div>
            )
        )}
        <div>
          <h4 className="comments" style={{ fontFamily: "Mulish, sans-serif" }}>
            {` Comments (${comentarios.length})`}
          </h4>
          <div>
            <ul>
              {comentarios.map((comentario, index) => (
                <div key={index}>
                  {comentario}
                  <div className="fecha">
                    {moment(fecha).format("MMMM Do YYYY, h:mm:ss a")}
                  </div>
                </div>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <label>
                <textarea
                  className="textarea"
                  style={{ fontFamily: "Mulish, sans-serif" }}
                  type="text"
                  value={nuevoComentario}
                  onChange={handleNuevoComentario}
                  placeholder="Write your comment here"
                />
              </label>
              <button type="submit" className="btn">
                Submit comment
              </button>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
