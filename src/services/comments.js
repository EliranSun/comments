import axios from "axios";
import { ADD_COMMENT_URL, COMMENTS_URL } from "../constants/comments";
import Comment from "../models/Comment";

export const getComments = async ({ start, limit }) => {
  try {
    const { data } = await axios.get(COMMENTS_URL, {
      params: {
        _start: start,
        _limit: limit,
      },
    });

    return data.map((comment) => new Comment(comment));
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const addComment = (comment) => {
  return axios.post(ADD_COMMENT_URL, new Comment(comment));
};
