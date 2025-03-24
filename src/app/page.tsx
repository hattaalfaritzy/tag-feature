"use client";

import { useCallback, useMemo } from "react";
import { Icons } from "@/components/commons";
import { TagManager } from "@/components/sections/tag-sections";
import { useCreateTag } from "@/config/api/create-tag";
import { useFetchTagSuggestions } from "@/config/api/fetch-tag-suggestions";
import { cn } from "@/utils/cn";

export default function Home() {
  const { data, isFetching, error: errorFetchSuggestions, refetch } = useFetchTagSuggestions();
  const { isSuccess, isPending: isLoadingCreate, error: errorCreate, mutate } = useCreateTag();

  const handleCreateTag = useCallback(() => {
    const defaultPayload: CreateTagPayload = {
      entity_id: "321",
      name: "Create Tag",
    };
    mutate(defaultPayload);
  }, [mutate]);

  const errorMessage = useMemo(() => {
    if (errorFetchSuggestions) return errorFetchSuggestions.message;
    if (errorCreate) return errorCreate.message;
    return null;
  }, [errorFetchSuggestions, errorCreate]);

  const isError = useMemo(() => Boolean(errorFetchSuggestions || errorCreate), [errorFetchSuggestions, errorCreate]);
  const isLoading = useMemo(() => isFetching || isLoadingCreate, [isFetching, isLoadingCreate]);

  return (
    <div className="flex flex-col space-y-2">
      {(isError || isSuccess) && (
        <div className={cn("flex px-2 w-full rounded", isError ? "bg-error" : "bg-success")}>
          {(isError || isSuccess) && (
            <div
              className={cn(
                "flex px-2 w-full text-white text-sm p-2 space-x-2 rounded",
                isError ? "bg-error" : "bg-success"
              )}
            >
              <Icons name="info" />
              <span>{isError ? errorMessage : "Tag has been successfully created"}</span>
            </div>
          )}
        </div>
      )}
      <TagManager tags={data?.tags ?? []} isFetching={isLoading} onCreate={handleCreateTag} />
    </div>
  );
}
