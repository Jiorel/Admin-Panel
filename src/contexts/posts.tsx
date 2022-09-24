import * as api from "../api";
import React, { createContext, useState, useEffect, useContext } from "react";

const PostContext = createContext();

export function usePost() {
  return useContext(PostContext);
}

export function PostProvider({ children }: React.PropsWithChildren) {
  const [posts, setPosts] = useState([]);

  const value = {};

  function addPost() {}
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}
