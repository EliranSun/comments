import styles from "./Comment.module.scss";

const Comment = ({ name, email, body }) => {
  return (
    <li className={styles.comment}>
      <h1>
        <span className={styles.name}>{name}</span> said...
      </h1>
      <p className={styles.body}>{body}</p>
      <h2>{email}</h2>
    </li>
  );
};

export default Comment;
