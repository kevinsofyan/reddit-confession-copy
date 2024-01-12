"use client";

import React from "react";
import Link from "next/link";

import { PostLayoutCardArticles } from "./postLayoutCardArticles";
import { PostBottomMenu } from "../../PostBottomMenu";
import { Vote } from "@/components/vote/vote";
import { urlPrefixRemover } from "@/util/urlPrefixRemover";

export const PostLayoutCard = ({ data }) => {
  const {
    title,
    selftext,
    created_utc,
    author,
    score,
    num_comments,
    permalink,
  } = data;

  return (
    <Link
      className="bg-white rounded-[4px] border border-gray-border hover:border-gray-border-active  flex mb-[10px]"
      href={"/" + urlPrefixRemover(permalink)}
    >
      <div className="flex-none w-[50px] bg-gray-light rounded-[4px]">
        <Vote score={score} />
      </div>
      <div className="flex-row p-[10px] pb-1">
        <PostLayoutCardArticles
          author={author}
          title={title}
          selftext={selftext}
          createdUtc={created_utc}
        />
        <PostBottomMenu comments={num_comments} />
      </div>
    </Link>
  );
};
