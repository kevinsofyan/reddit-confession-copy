"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
  ArrowsPointingOutIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";

import { Vote } from "@/components/vote/vote";
import { PostLayoutCompactHeader } from "./PostLayoutCompactHeader";
import { PostLayoutCompactArticles } from "./postLayoutCompactArticles";
import { urlPrefixRemover } from "@/util/urlPrefixRemover";

export const PostLayoutCompact = ({ data }) => {
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

  const handleToggleExpand = (e) => {
    e.preventDefault();
    setIsExpand(!isExpand);
  };
  return (
    <Link
      href={urlPrefixRemover(permalink)}
      className="bg-white rounded-[4px] border border-gray-border hover:border-gray-border-active  flex"
    >
      <div className="flex-col w-full">
        <div className="flex">
          <div className="flex w-[130px] bg-gray-light rounded-[4px] pt-[5px] px-[5px] items-center">
            <Vote mode="horizontal" score={score} />
          </div>
          <div className="flex p-[10px] pb-1 justify-between w-full">
            <div className="flex">
              <button
                className="flex px-2 py-1 hover:bg-reddit-gray-100 focus:relative items-center ml-1 mr-3"
                onClick={handleToggleExpand}
              >
                <ArrowsPointingOutIcon className="w-[20px]" />
                <span className="text-xs font-[700]"></span>
              </button>
              <PostLayoutCompactHeader
                title={title}
                createdUtc={created_utc}
                author={author}
              />
            </div>
            <div className="flex">
              <button
                className="flex px-1 py-2 hover:bg-reddit-gray-100 focus:relative items-center"
                title="View Orders"
              >
                <ChatBubbleOvalLeftIcon className="w-[25px] mr-[5px]" />{" "}
                <label className="text-xs font-[700] w-[40px]">
                  {num_comments}
                </label>
              </button>
            </div>
          </div>
        </div>
        <PostLayoutCompactArticles isExpand={isExpand} selftext={selftext} />
      </div>
    </Link>
  );
};
