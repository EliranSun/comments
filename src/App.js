import "./App.css";
import { Comments, AddComment, EndlessScroll } from "./components";

function App() {
  return (
    <div className="App">
      <AddComment />
      <EndlessScroll>{(props) => <Comments {...props} />}</EndlessScroll>
    </div>
  );
}

export default App;
