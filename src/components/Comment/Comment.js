const Comment = ({ name, email, body }) => {
  return (
    <li>
      <h1>{name} said...</h1>
      <h2>{email}</h2>
      <p>{body}</p>
    </li>
  );
};

export default Comment;
