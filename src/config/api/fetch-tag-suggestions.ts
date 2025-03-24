"use client";

import { useQuery } from "@tanstack/react-query";
import fetchApi from "@/utils/fetchApi";

const fetchTagSuggestions = async () => {
  return fetchApi<TagsResponse>("GET", "/tags/suggestions");
};

export const useFetchTagSuggestions = () => {
  return useQuery({
    queryKey: ["fetchTagSuggestions"],
    queryFn: () => fetchTagSuggestions(),
    staleTime: 0,
    retry: false,
    refetchOnWindowFocus: false,
  });
};
