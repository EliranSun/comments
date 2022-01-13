import { useState } from "react";
import { addComment } from "../../services/comments";

const AddComment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div>
      ADD COMMENT
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <textarea
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <button
        onClick={() => {
          addComment({ comment, name, email });
        }}>
        SEND
      </button>
    </div>
  );
};

export default AddComment;
