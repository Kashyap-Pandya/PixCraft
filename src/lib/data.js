import { Post, User } from "./models";
import { connectToDb } from "./connectToDb";

export const getPosts = async () => {
  try {
    await connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log("Error fetching posts:", err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    await connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log("Error fetching post:", err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  try {
    await connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log("Error fetching user:", err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    await connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log("Error fetching users:", err);
    throw new Error("Failed to fetch users!");
  }
};
