import React, { Fragment } from "react";

export const PostLayoutCompactArticles = ({ isExpand, selftext }) => {
  return (
    <Fragment>
      {isExpand && (
        <section className="mt-[12px] mb-[15px] px-3">
          <p className="text-sm">{selftext}</p>
        </section>
      )}
    </Fragment>
  );
};
