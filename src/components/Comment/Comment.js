const Comment = ({ name, email, body }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
