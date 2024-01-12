import React, { Fragment } from "react";
import {
  ChatBubbleOvalLeftIcon,
  ArrowUturnRightIcon,
  ArrowsPointingOutIcon,
  BookmarkIcon,
} from "@heroicons/react/24/outline";

export const PostBottomMenu = ({
  expand = false,
  onExpand,
  isExpand,
  comments,
  commentArea = false,
}) => {
  const handleOnExpand = (evt) => {
    evt.preventDefault();
    onExpand(!isExpand);
  };
  return (
    <Fragment>
      <div className="flex overflow-hidden bg-white gap-1">
        {expand && (
          <button
            className="flex px-1 py-2 hover:bg-reddit-gray-100 focus:relative items-center border-r-2 mr-2"
            title="View Orders"
            onClick={handleOnExpand}
          >
            <ArrowsPointingOutIcon className="w-[20px] mr-[5px] " />

            <span className="text-xs font-[700]"></span>
          </button>
        )}
        <button
          className="flex px-1 py-2 hover:bg-reddit-gray-100 focus:relative items-center"
          title="View Orders"
        >
          <ChatBubbleOvalLeftIcon className="w-[20px] mr-[5px]" />

          <span className="text-xs font-[700]">{comments} Comments</span>
        </button>
        <button
          className="flex px-4 py-2 hover:bg-reddit-gray-100 focus:relative items-center"
          title="View Orders"
        >
          <ArrowUturnRightIcon className="w-[20px] mr-[5px]" />

          <span className="text-xs font-[700]">Share</span>
        </button>
        <button
          className="flex px-4 py-2 hover:bg-reddit-gray-100 focus:relative items-center"
          title="View Orders"
        >
          <BookmarkIcon className="w-[20px] mr-[5px]" />

          <span className="text-xs font-[700]">Save</span>
        </button>
      </div>
      {commentArea && (
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
