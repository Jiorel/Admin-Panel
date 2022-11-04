import { useQuery, useQueries } from "@tanstack/react-query";
import * as api from "api";

export function usePostQuery(id: number | null) {
  return useQuery(["post", id], () => api.getPostById(id as number), {
    enabled: !!id,
  });
}

export function useUserQuery(id: number | null) {
  return useQuery(["user", id], () => api.getUserById(id as number), {
    enabled: !!id,
  });
}
