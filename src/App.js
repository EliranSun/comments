import "./App.css";
import { Comments, EndlessScroll } from "./components";
function App() {
  return (
    <div className="App">
      <EndlessScroll>{(props) => <Comments {...props} />}</EndlessScroll>
    </div>
  );
}

export default App;
