"use client";

import React, { useState } from "react";
import Link from "next/link";

import { PostBottomMenu } from "../../PostBottomMenu";
import { Vote } from "@/components/vote/vote";
import { PostLayoutClassicArticles } from "./postLayoutClassicArticles";
import { PostLayoutClassicHeader } from "./postLayoutClassicHeader";
import { urlPrefixRemover } from "@/util/urlPrefixRemover";

export const PostLayoutClassic = ({ data, index }) => {
  const [isExpand, setIsExpand] = useState(false);
  const {
    title,
    selftext,
    created_utc,
    author,
    score,
    num_comments,
    permalink,
  } = data;
  const handleToggleExpand = (param) => {
    setIsExpand(param);
  };
  return (
    <Link
      href={urlPrefixRemover(permalink)}
      className="bg-white rounded-[4px] border border-gray-border hover:border-gray-border-active  flex mb-[10px]"
    >
      <div className="flex-none w-[50px] bg-gray-light rounded-[4px]">
        <Vote score={score} index={index} />
      </div>
      <div className="flex-row p-[10px] pb-1">
        <article className="mb-[10px]">
          <PostLayoutClassicHeader
            author={author}
            createdUtc={created_utc}
            title={title}
          />
          <PostBottomMenu
            expand
            onExpand={handleToggleExpand}
            isExpand={isExpand}
            comments={num_comments}
          />
          <PostLayoutClassicArticles selftext={selftext} isExpand={isExpand} />
        </article>
      </div>
    </Link>
  );
};
