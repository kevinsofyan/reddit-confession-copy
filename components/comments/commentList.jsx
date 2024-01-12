"use client";

import React, { Fragment, useEffect } from "react";
import { Comment } from "./comment";

export const CommentList = ({ commentData, depth = 0 }) => {
  useEffect(() => {}, [commentData]);
  return (
    <div>
      {commentData.map((comment, index) => (
        <Comment key={index} {...comment.data} depth={depth} />
      ))}
    </div>
  );
};
