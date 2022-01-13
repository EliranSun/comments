import { useState } from "react";
import { addComment } from "../../services/comments";

import styles from "./AddComment.module.scss";

const AddComment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className={styles.addComment}>
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
        value={body}
        onChange={(event) => setBody(event.target.value)}
      />
      <button
        onClick={() => {
          addComment({ body, name, email });
        }}>
        SEND
      </button>
    </div>
  );
};

export default AddComment;
