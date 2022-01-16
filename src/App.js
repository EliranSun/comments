import { useState } from "react";
import { Comments, AddComment, EndlessScroll } from "./components";

const App = () => {
  const [newComments, setNewComments] = useState([]);

  return (
    <>
      <AddComment
        onSubmit={(comment) => setNewComments([...newComments, comment])}
      />
      <EndlessScroll>
        {(props) => <Comments comments={newComments} {...props} />}
      </EndlessScroll>
    </>
  );
};

export default App;
