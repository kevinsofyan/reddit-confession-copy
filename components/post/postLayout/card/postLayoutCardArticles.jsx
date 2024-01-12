import React from "react";
import Link from "next/link";

import { formatTimeDifference } from "@/util/utcTimeDifference";

export const PostLayoutCardArticles = ({
  title,
  selftext,
  createdUtc,
  author,
  subreddit,
}) => {
  return (
    <article className="mb-[20px]">
      <header>
        <p className="text-xs mb-2 flex">
          {subreddit && (
            <Link className="font-bold mr-1" href={subreddit}>
              /r{subreddit} <span>•</span>
            </Link>
          )}
          Posted by u/{author} - {formatTimeDifference(createdUtc)} ago
        </p>
        <h3 className="mb-2">{title}</h3>
      </header>
      <section className="max-h-[241px] overflow-hidden">
        <p className="text-base ">{selftext}</p>
      </section>
    </article>
  );
};
