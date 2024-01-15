import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import { CommentBottomMenu } from "./commentBottomMenu";
import { formatTimeDifference } from "@/util/utcTimeDifference";

export const Comment = ({
  author,
  body,
  created_utc,
  replies,
  score,
  depth = 0,
  id,
}) => {
  const isNested = depth > 0;
  return (
    <div className={`mb-4 ml-${isNested ? "8" : "0"} relative`}>
      <div className="flex flex-col items-start relative">
        <div className="h-[30px] w-[30px] rounded-full absolute left-[-14px] z-10">
          <Image
            src={`https://ui-avatars.com/api/?name=${author}?rounded=true`}
            width={500}
            height={500}
            alt="Picture of the author"
            className=" rounded-full "
          />
        </div>
      </div>
      <div className="flex">
        <div className="before:content-[''] before:absolute before:h-full before:bg-gray-border before:w-[2px] before:inset-2 before:left-[0px] " />
        <div className="flex flex-col pl-7 mb-[25px] w-[100%]">
          <div className="text-xs mb-[10px]">
            <span className="font-bold">{author}</span>
            <span> · </span>
            <span>{formatTimeDifference(created_utc)} ago</span>
          </div>
          <div className="mb-[10px] text-sm">{body}</div>
          <CommentBottomMenu score={score} />
        </div>
      </div>

      {replies && replies.data && replies.data.children && (
        <div className="ml-[30px]">
          {replies?.data?.children.map((reply, index) => (
            <Fragment key={index}>
              {reply.data.author && (
                <Comment key={index} {...reply?.data} depth={depth + 1} />
              )}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
};
