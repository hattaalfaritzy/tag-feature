import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import fetchApi from "@/utils/fetchApi";

const createTag = (payload: CreateTagPayload): Promise<AxiosResponse<CreateTagResponse>> => {
  return fetchApi<AxiosResponse<CreateTagResponse>>("POST", "/tags", payload);
};

export const useCreateTag = () => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<CreateTagResponse>, Error, CreateTagPayload>({
    mutationKey: ["createTag"],
    mutationFn: createTag,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["fetchTagSuggestions"] });
    },
    retry: false,
  });
};
