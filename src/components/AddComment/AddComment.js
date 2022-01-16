import { useState } from "react";
import { addComment } from "../../services/comments";

import styles from "./AddComment.module.scss";

const AddComment = ({ onSubmit }) => {
  const [isErrorView, setIsErrorView] = useState(false);
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
        className={isErrorView && !name ? styles.error : ""}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        className={isErrorView && !email ? styles.error : ""}
        onChange={(event) => setEmail(event.target.value)}
      />
      <textarea
        value={body}
        className={isErrorView && !body ? styles.error : ""}
        onChange={(event) => setBody(event.target.value)}
      />
      <button
        onClick={async () => {
          if ((name || email) && body) {
            const comment = { body, name, email };
            await addComment(comment);
            // optimistic update
            onSubmit(comment);
          } else {
            setIsErrorView(true);
          }
        }}>
        SEND
      </button>
    </div>
  );
};

export default AddComment;
