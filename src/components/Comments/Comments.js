import { useState, useEffect } from "react";
import { getComments } from "../../services/comments";
import { Comment } from "../Comment";

import styles from "./Comments.module.scss";

const CENTERAL_COMMENT = "What are your comments on thoughts?";
const COMMENTS_TO_LOAD = 20;
const COMMENTS_PER_LEVEL = 10;

const degsToRads = (deg) => (deg * Math.PI) / 180.0;

const Comments = ({
  comments: initialComments,
  loadMoreItems,
  endlessRef,
  itemsLimit,
}) => {
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
    <>
      <div className={styles.centeralComment}>
        <Comment body={CENTERAL_COMMENT} />
      </div>
      <div onWheel={loadMoreItems} ref={endlessRef} className={styles.wrapper}>
        {initialComments
          .concat(comments)
          .map(({ id, name, email, body }, index) => {
            const currentLevel =
              parseInt((comments.length - 1) / COMMENTS_PER_LEVEL) + 1;
            const level = parseInt(index / COMMENTS_PER_LEVEL) + 1;
            const isHidden =
              itemsLimit > COMMENTS_TO_LOAD && level <= currentLevel - 2;

            const height = window.innerHeight / 2;
            const width = window.innerWidth / 2;
            const radius = 100 + level * 400;
            const degree = (index * 360) / COMMENTS_PER_LEVEL;

            return (
              <Comment
                key={id}
                id={id}
                radius={radius}
                currentLevel={currentLevel}
                index={index}
                isHidden={isHidden}
                name={name}
                email={email}
                body={body}
                level={level}
                position={{
                  top: `${height + radius * Math.sin(degsToRads(degree))}px`,
                  left: `${width + radius * Math.cos(degsToRads(degree))}px`,
                }}
              />
            );
          })}
      </div>
    </>
  );
};

export default Comments;
