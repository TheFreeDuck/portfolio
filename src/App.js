import React, { useState, useEffect } from "react";

const MusicPage = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("../resources/music/scientist.mp3")
      .then((response) => response.json())
      .then((data) => {
        setSongs(data);
      });
  }, []);

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Music</a>
            </li>
            <li>
              <a href="#">Programs</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Music</h1>
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              <a href={`/songs/${song.filename}`}>{song.title}</a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default MusicPage;
