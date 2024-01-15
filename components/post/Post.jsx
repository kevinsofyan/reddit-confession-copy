"use client";

import React from "react";
import Filter from "../filter/filter";
import { PostList } from "./PostList";
import useThemeStore from "@/store/useThemeStore";
import clsx from "clsx";
import Link from "next/link";

export const Post = ({ data, topics = null }) => {
  const { theme } = useThemeStore();

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
          <div className=" mb-4">
            <h1 className="text-xl mb-0 line-clamp-1">
              Admit your wrongdoings
            </h1>
            <Link href={"/confession"} className="text-sm">
              /r/confession
            </Link>
          </div>
          <Filter active={topics} />
          <PostList data={data} />
        </div>
      </div>
    </section>
  );
};
