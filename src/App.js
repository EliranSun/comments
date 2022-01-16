import { Comments, AddComment, EndlessScroll } from "./components";

function App() {
  return (
    <div>
      {/* <AddComment /> */}
      <EndlessScroll>{(props) => <Comments {...props} />}</EndlessScroll>
    </div>
  );
}

export default App;
