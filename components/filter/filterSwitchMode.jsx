"use client";

import useThemeStore from "@/store/useThemeStore";
import { Menu, Transition } from "@headlessui/react";
import {
  Bars2Icon,
  Bars3Icon,
  Bars4Icon,
  ChevronDownIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import React, { Fragment, useEffect } from "react";

export const FilterSwitchMode = () => {
  const { theme, toggleTheme } = useThemeStore();

  const handleToggleTheme = (param) => {
    toggleTheme(param);
  };
  return (
    <Menu as="div" className="relative inline-block text-left mt-2">
      <Menu.Button className="flex items-center">
        {theme === "card" && <Bars2Icon className="w-[20px] mr-2" />}
        {theme === "classic" && <Bars3Icon className="w-[20px] mr-2" />}
        {theme === "compact" && <Bars4Icon className="w-[20px] mr-2" />}
        <ChevronDownIcon className="w-[20px]" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-[95px] divide-y divide-gray-border rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-gray-100" : "text-gray-900"
                } group flex w-full items-center px-2 py-2 text-sm`}
                onClick={() => handleToggleTheme("card")}
              >
                <Bars2Icon className="w-[20px] mr-[5px]" />
                Card
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-gray-100" : "text-gray-900"
                } group flex w-full items-center px-2 py-2 text-sm`}
                onClick={() => handleToggleTheme("classic")}
              >
                <Bars3Icon className="w-[20px] mr-[5px]" />
                Classic
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-gray-100" : "text-gray-900"
                } group flex w-full items-center px-2 py-2 text-sm`}
                onClick={() => handleToggleTheme("compact")}
              >
                <Bars4Icon className="w-[20px] mr-[5px]" />
                Compact
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
