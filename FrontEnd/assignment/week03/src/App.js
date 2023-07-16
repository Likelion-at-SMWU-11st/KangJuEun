import "./App.css";
import Hello from "./Hello";
import Bye from "./Bye";

function App() {
  const bool = true;

  return <>{bool === true ? <Hello /> : <Bye />}</>;
}

export default App;
