import { useQuery } from "@tanstack/react-query";
import fetchApi from "@/utils/fetchApi";

const fetchTagsByEntity = async (entity_id: string) => {
  return fetchApi<EntityWithTagsResponse>("GET", `/tags`, { params: { entity_id } });
};

export const useFetchTagsByEntity = (entity_id: string) => {
  return useQuery({
    queryKey: ["fetchTagsByEntity", entity_id],
    queryFn: () => fetchTagsByEntity(entity_id),
    staleTime: 0,
    retry: false,
    refetchOnWindowFocus: false,
    enabled: !!entity_id,
  });
};
