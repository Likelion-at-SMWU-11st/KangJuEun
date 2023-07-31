import "./App.css";
import ExternalButton from "./ExternalButton";
import InlineButton from "./InlineButton";
import Logo from "./Logo";
import LikeButton from "./LikeButton";
import FunnyButton from "./FunnyButton";
import SadButton from "./SadButton";
import SleepyButton from "./SleepyButton";

function App() {
  return (
    <>
      <Logo />
      {/*<h3>다양한 스타일링 방법으로 버튼 만들기</h3>
      <InlineButton />
      <ExternalButton /> */}
      <h3>JUEUN's community</h3>
      <p>여름이 너무 더워용..</p>
      <LikeButton />
      <FunnyButton />
      <SadButton />
      <SleepyButton />
      <hr />
      <h4>댓글</h4>
      <small>🐶: 여름 감기 조심하세요! </small>
      <p></p>
      <small>🐹: 얼른 겨울이 왔으면 좋겠네요 ㅜ.ㅜ</small>
    </>
  );
}

export default App;
