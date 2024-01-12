import {
  BookmarkIcon,
  ChartBarIcon,
  ChatBubbleOvalLeftIcon,
  FireIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { ButtonRounded } from "../button/buttonRounded";
import { Menu } from "@headlessui/react";
import { FilterSwitchMode } from "./filterSwitchMode";

function Filter({ active }) {
  return (
    <div className="bg-white rounded-[4px] border border-gray-border flex py-[12px] px-[10px] mb-[10px] justify-between">
      <div className="sm:hidden">
        <select id="Tab" className="w-full rounded-md border-gray-200">
          <option>Settings</option>
          <option>Messages</option>
          <option>Archive</option>
          <option>Notifications</option>
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex gap-2" aria-label="Tabs">
          <ButtonRounded
            icon={FireIcon}
            isActive={active === "hot"}
            url="/confession/hot"
          >
            Hot
          </ButtonRounded>
          <ButtonRounded
            icon={StarIcon}
            isActive={active === "new"}
            url="/confession/new"
          >
            New
          </ButtonRounded>
          <ButtonRounded
            icon={ChartBarIcon}
            isActive={active === "top"}
            url="/confession/top"
          >
            Top
          </ButtonRounded>
        </nav>
      </div>
      <FilterSwitchMode />
    </div>
  );
}

export default Filter;
