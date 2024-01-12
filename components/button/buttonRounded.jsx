import React from "react";

import Link from "next/link";
import PropTypes from "prop-types";
import clsx from "clsx";

export const ButtonRounded = ({
  icon: IconComponent,
  url,
  isActive,
  children,
} = props) => {
  return (
    <Link
      href={url || "#"}
      className={clsx(
        `flex shrink-0 rounded-2xl px-[10px] py-[5px] hover:bg-reddit-gray-100 focus:relative items-center`,
        {
          "bg-reddit-gray-100": isActive,
        }
      )}
    >
      {IconComponent && <IconComponent className="w-[25px] mr-[5px]" />}
      <span className="text-sm font-bold">{children}</span>
    </Link>
  );
};

ButtonRounded.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.node]),
  url: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
