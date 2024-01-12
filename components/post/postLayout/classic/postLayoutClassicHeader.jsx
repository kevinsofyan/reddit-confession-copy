import React from "react";

import { formatTimeDifference } from "@/util/utcTimeDifference";

export const PostLayoutClassicHeader = ({ author, createdUtc, title }) => {
  return (
    <header>
      <h3>{title}</h3>
      <p className="text-xs mb-2">
        Posted by u/{author} - {formatTimeDifference(createdUtc)} ago
      </p>
    </header>
  );
};
