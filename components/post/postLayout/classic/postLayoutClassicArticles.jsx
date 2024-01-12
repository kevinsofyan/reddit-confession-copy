import React, { Fragment } from "react";

export const PostLayoutClassicArticles = ({ selftext, isExpand }) => {
  return (
    <Fragment>
      {isExpand && (
        <section className="mt-[12px] mb-[15px]">
          <p className="text-sm">{selftext}</p>
        </section>
      )}
    </Fragment>
  );
};
