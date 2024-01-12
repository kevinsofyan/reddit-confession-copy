"use client";

import React, { Fragment, useState } from "react";
import {
  ChatBubbleOvalLeftIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/24/outline";
import { Vote } from "../vote/vote";

export const CommentBottomMenu = ({ score, id }) => {
  const [isReply, setIsReply] = useState(false);

  const handleToggleReply = () => {
    setIsReply(!isReply);
  };
  return (
    <Fragment>
      <div className="flex overflow-hidden bg-white gap-1">
        <Vote mode="horizontal" score={score} />
        <button
          className="flex px-1 py-2 hover:bg-reddit-gray-100 focus:relative items-center"
          title="View Orders"
          onClick={handleToggleReply}
        >
          <ChatBubbleOvalLeftIcon className="w-[20px] mr-[5px]" />

          <span className="text-xs font-[700]">Reply</span>
        </button>
        <button
          className="flex px-4 py-2 hover:bg-reddit-gray-100 focus:relative items-center"
          title="View Orders"
        >
          <ArrowUturnRightIcon className="w-[20px] mr-[5px]" />

          <span className="text-xs font-[700]">Share</span>
        </button>
      </div>
      {isReply && (
        <div className="flex flex-col">
          <textarea
            id="about"
            name="about"
            rows="3"
            className="block w-full rounded-md border border-gray-border p-3 resize-none mt-2"
          ></textarea>
          <div className="mt-2 mb-3 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-3xl bg-reddit-black-100 px-3 py-2 text-xs font-bold text-white"
            >
              Comment
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
};
