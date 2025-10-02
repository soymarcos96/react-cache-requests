import { useQuery } from "@tanstack/react-query";

export const useReactQuery = (url: string) => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url);
      return res.json();
    },
    staleTime: 1000 * 60, // 1 min cache
  });
};