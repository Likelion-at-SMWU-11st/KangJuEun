import React from "react";
import Hello from "./Hello";
import Counter from "./Counter";
import MovieList from "./MovieList";
import MusicList from "./MusicList";

function App() {
  return (
    <>
      <Hello name="저는 주은입니다." color="orange" />
      <Counter />
      <MovieList />
      <MusicList />
    </>
  );
}

export default App;
