import React from "react";
import Hello from "./Hello";
import Counter from "./Counter";
import MovieList from "./MovieList";
import MusicList from "./MusicList";
import Bye from "./Bye";
import TimerComponent from "./Timer";

function App() {
  return (
    <>
      <Hello name="저는 주은입니다." color="green" />
      <Bye bye="아래의 리스트를 잘 읽어보셨나요?" color="blue" />
      <Counter />
      <TimerComponent />
      <MovieList />
      <MusicList />
    </>
  );
}

export default App;
