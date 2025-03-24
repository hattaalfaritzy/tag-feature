interface Tag {
  id: string;
  name: string;
  color: string;
}

interface TagsResponse {
  tags: Tag[];
}

interface EntityWithTagsResponse extends TagsResponse {
  entity_id: string;
}

interface CreateTagPayload extends Omit<EntityWithTagsResponse, "tags"> {
  name: string;
}

interface CreateTagResponse extends EntityWithTagsResponse {}
