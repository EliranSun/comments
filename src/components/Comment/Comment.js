import { useState, useRef, useEffect } from "react";
import classNames from "classnames";

import styles from "./Comment.module.scss";

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const floatAnimation = (ref) => {
  // const translateY =
  const randomFloat = [
    // { transform: "translatey(0px, 0px)" },
    { transform: "translatey(0px)" },
    {
      // transform: `translatey(${randomNumberBetween(-5, 5)}px, ${randomNumberBetween(-5, 5)}px)`,
      transform: `translatey(${randomNumberBetween(-10, 10)}px)`,
    },
    // { transform: "translatey(0px, 0px)" },
    { transform: "translatey(0px)" },
  ];

  const timing = {
    duration: 16000,
    iterations: Infinity,
  };

  if (ref.current) {
    ref.current.animate(randomFloat, timing);
  }
};

const fadeAnimation = () => {};

const Comment = ({
  name = "",
  email = "",
  body = "",
  position = {},
  isHidden = false,
  level,
  index,
}) => {
  const commentRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    floatAnimation(commentRef);
  }, []);

  if (isHidden) {
    return null;
  }

  return (
    <div
      ref={commentRef}
      className={classNames(styles.comment)} // styles.cloud
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        top: position.top,
        left: position.left,
        fontSize: `${(level || 1) * 2.5}rem`,
        // transform: `scale(${level ^ 2})`,
        maxWidth: `${150 + Math.pow(level, level)}px`,
        maxHeight: `${150 + Math.pow(level, level)}px`,
      }}>
      {name && (
        <div className={styles.contentWrapper}>
          <span style={{ fontSize: "0.3em" }}>{index}</span>
          <h1 className={styles.commenter}>{name}</h1>
          {isHovered && <h2 className={styles.email}>({email})</h2>}
          <span className={styles.commenter}>says:</span>
        </div>
      )}
      <p className={styles.body}>{body}</p>
    </div>
  );
};

export default Comment;
