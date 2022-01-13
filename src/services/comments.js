import axios from "axios";
import { ADD_COMMENT_URL, COMMENTS_URL } from "../constants/comments";

export const getComments = async ({ start, limit }) => {
  try {
    const { data } = await axios.get(COMMENTS_URL, {
      params: {
        _start: start,
        _limit: limit,
      },
    });

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

export const addComment = () => {
  return axios.post(ADD_COMMENT_URL, {
    name: "Test",
    email: "",
  });
};
