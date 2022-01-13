import { v4 as uuidv4 } from "uuid";

class Comment {
  constructor({ name, email, body }) {
    this.name = name;
    this.email = email;
    this.body = body;
    this.id = uuidv4();
  }
}

export default Comment;
