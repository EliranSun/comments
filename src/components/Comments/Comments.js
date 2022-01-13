import { useState, useEffect } from "react";
import { getComments } from "../../services/comments";
import { Comment } from "../Comment";

const COMMENTS_LIMIT = 20;
const COMMENTS_START = 0;

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [commentsStart, setCommentsStart] = useState(COMMENTS_START);

  useEffect(() => {
    const fetch = async () => {
      const comments = await getComments({
        start: commentsStart,
        limit: COMMENTS_LIMIT,
      });
      setComments(comments);
    };

    fetch();
  }, [commentsStart]);

  return (
    <div>
      {comments.map(({ id, name, email, body }) => (
        <Comment key={id} name={name} email={email} body={body} />
      ))}
    </div>
  );
};

export default Comments;
