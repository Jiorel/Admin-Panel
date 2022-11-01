import { useQuery, useQueries } from "@tanstack/react-query";
import * as api from "api";

export function usePostQuery(id: number | null) {
  return useQuery(["post", id], () => (id ? api.getPostById(id) : null));
}

export function useUserQuery(id: number | null) {
  return useQuery(["user", id], () => (id ? api.getUserById(id) : null));
}

export function getUsersAndPosts() {
  return useQueries({
    queries: [
      { queryKey: ["posts"], queryFn: api.getPosts },
      { queryKey: ["users"], queryFn: api.getUsers },
    ],
  });
}
