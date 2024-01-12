import { formatTimeDifference } from "@/util/utcTimeDifference";
import React from "react";

export const PostLayoutCompactHeader = ({ title, createdUtc, author }) => {
  return (
    <header>
      <h3 className="text-base">{title}</h3>
      <p className="text-xs">
        Posted by u/{author} - {formatTimeDifference(createdUtc)} ago
      </p>
    </header>
  );
};
