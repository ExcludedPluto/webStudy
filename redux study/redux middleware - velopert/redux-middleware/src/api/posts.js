import axios from "axios";

export const getPost = async () => {
   const response = await axios.get("/posts");
   return response.data;
};

export const getPostById = async (id) => {
   const response = await axios.get(`/posts/${id}`);
   return response.data;
};
