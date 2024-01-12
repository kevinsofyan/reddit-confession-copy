"use client";

import React, { Fragment } from "react";

import useThemeStore from "@/store/useThemeStore";
import { PostLayoutCard } from "./postLayout/card/postLayoutCard";
import { PostLayoutClassic } from "./postLayout/classic/postLayoutClassic";
import { PostLayoutCompact } from "./postLayout/compact/postLayoutCompact";

export const PostContent = ({ data }) => {
  const { theme } = useThemeStore();

  return (
    <Fragment>
      {theme === "card" && <PostLayoutCard data={data} />}
      {theme === "classic" && <PostLayoutClassic data={data} />}
      {theme === "compact" && <PostLayoutCompact data={data} />}
    </Fragment>
  );
};
