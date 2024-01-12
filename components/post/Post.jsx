"use client";

import React, { useEffect } from "react";
import Filter from "../filter/filter";
import { PostList } from "./PostList";
import useThemeStore from "@/store/useThemeStore";
import clsx from "clsx";
import usePostStore from "@/store/usePostStore";

export const Post = ({ data, topics = null }) => {
  const { theme } = useThemeStore();
  const { setPostList } = usePostStore();

  useEffect(() => {
    setPostList(data);
  }, [data]);

  return (
    <section
      className={clsx("mx-auto w-full", {
        "w-inner-container": theme === "card",
      })}
    >
      <div
        className={clsx("p-[20px] w-100 grid gap-4", {
          "lg:grid-cols-4": theme === "card",
        })}
      >
        <div className="col-span-3">
          <Filter active={topics} />
          <PostList data={data} />
        </div>
      </div>
    </section>
  );
};
