import React from "react";
import { PostContent } from "./PostContent";

export const PostList = ({ data }) => {
  return (
    <ul>
      {data?.children?.map((post) => (
        <li key={post.data.id}>
          <PostContent data={post.data} />
        </li>
      ))}
    </ul>
  );
};
