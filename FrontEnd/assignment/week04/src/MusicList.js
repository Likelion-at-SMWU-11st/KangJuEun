import React, { useState, useEffect } from "react";
import axios from "axios";

const MusicList = () => {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/musics")
      .then((response) => {
        setMusics(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>요즘 즐겨듣는 노래 리스트</h1>
      <ul>
        {musics.map((music) => (
          <li key={music.id}>
            <h2>{music.title}</h2>
            <p>{music.artist}</p>
            <p>{music.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicList;
