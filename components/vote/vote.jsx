"use client";

import React, { useEffect, useState } from "react";

import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/outline";

import {
  ArrowUpCircleIcon as ArrowUpCircleIconSolid,
  ArrowDownCircleIcon as ArrowDownCircleIconSolid,
} from "@heroicons/react/24/solid";
import clsx from "clsx";

export const Vote = ({ mode = "vertical", score } = props) => {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);
  const [mainScore, setMainScore] = useState(score);

  useEffect(() => {});

  const handleUpVote = (e) => {
    e.preventDefault();
    if (!isUpvoted) {
      setIsUpvoted(true);
      setIsDownvoted(false);
      setMainScore(score + 1);
    } else {
      setIsUpvoted(false);
      setMainScore((prevScore) => prevScore - 1);
    }
  };

  const handleDownVote = (e) => {
    e.preventDefault();
    if (!isDownvoted) {
      setIsDownvoted(true);
      setIsUpvoted(false);
      setMainScore(score - 1);
    } else {
      setIsDownvoted(false);
      setMainScore((prevScore) => prevScore + 1);
    }
  };
  return (
    <div
      className={`flex ${
        mode === "horizontal"
          ? "flex-row mr-2 justify-stretch"
          : "flex-col pt-2"
      } items-center `}
    >
      <button onClick={handleUpVote}>
        {isUpvoted ? (
          <ArrowUpCircleIconSolid
            className={`w-[30px] text-reddit-blue ${
              mode === "horizontal" ? "mr-[10px]" : "mb-[10px]"
            }`}
          />
        ) : (
          <ArrowUpCircleIcon
            className={`w-[30px] ${
              mode === "horizontal" ? "mr-[10px]" : "mb-[10px]"
            }`}
          />
        )}
      </button>
      <label
        className={clsx("text-xs font-[700] w-[35px] text-center", {
          "text-reddit-red": isDownvoted,
          "text-reddit-blue": isUpvoted,
        })}
      >
        {mainScore}
      </label>
      <button onClick={handleDownVote}>
        {isDownvoted ? (
          <ArrowDownCircleIconSolid
            className={`w-[30px] text-reddit-red ${
              mode === "horizontal" ? "ml-[10px]" : "mt-[10px]"
            }`}
          />
        ) : (
          <ArrowDownCircleIcon
            className={`w-[30px] ${
              mode === "horizontal" ? "ml-[10px]" : "mt-[10px]"
            }`}
          />
        )}
      </button>
    </div>
  );
};
