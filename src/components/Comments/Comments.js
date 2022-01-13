import { useState, useEffect } from "react";
import { getComments } from "../../services/comments";
import { Comment } from "../Comment";

import styles from "./Comments.module.scss";

const COMMENTS_TO_LOAD = 20;

const Comments = ({ loadMoreItems, itemsLimit }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const fetchedComments = await getComments({
        start: itemsLimit - COMMENTS_TO_LOAD,
        limit: itemsLimit,
      });
      setComments([...comments, ...fetchedComments]);
    };

    fetch();
  }, [itemsLimit]);

  return (
    <ol className={styles.wrapper} onScroll={loadMoreItems}>
      {comments.map(({ id, name, email, body }) => (
        <Comment key={id} name={name} email={email} body={body} />
      ))}
    </ol>
  );
};

export default Comments;
