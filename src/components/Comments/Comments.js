import { useState, useEffect } from "react";
import { getComments } from "../../services/comments";
import { Comment } from "../Comment";

import styles from "./Comments.module.scss";

const COMMENTS_TO_LOAD = 20;

const Comments = ({ comments: initialComments, loadMoreItems, itemsLimit }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const newComments = await getComments({
        start: itemsLimit - COMMENTS_TO_LOAD,
        limit: COMMENTS_TO_LOAD,
      });

      // functional update to aboid incorrect effect dependency
      setComments((prevComments) => [...prevComments, ...newComments]);
    };

    fetch();
  }, [itemsLimit]);

  return (
    <ol className={styles.wrapper} onScroll={loadMoreItems}>
      {initialComments.concat(comments).map(({ id, name, email, body }) => (
        <Comment key={id} name={name} email={email} body={body} />
      ))}
    </ol>
  );
};

export default Comments;
