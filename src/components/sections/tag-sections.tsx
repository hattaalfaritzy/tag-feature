"use client";

import { Button, Icons, Tag } from "@/components/commons";

interface TagManagerProps {
  tags: Tag[];
  isFetching: boolean;
  onCreate: () => void;
}

export const TagManager = ({ tags, isFetching, onCreate }: TagManagerProps) => {
  return (
    <div className="flex flex-row justify-start items-center w-full border border-error p-4">
      <div className="flex flex-row justify-start items-center gap-1">
        {isFetching ? (
          <p>Loading...</p>
        ) : (
          tags.map((item) => <Tag variant="informative" key={item.id} label={item.name} />)
        )}
        <Button variant="success" onClick={onCreate} disabled={isFetching}>
          <Icons name="plus" />
        </Button>
      </div>
    </div>
  );
};
