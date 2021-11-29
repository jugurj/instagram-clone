import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <div className="flex justify-between bg-white max-w-6xl">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://marjanvanaubel.com/wp-content/uploads/2019/11/instagram-logo.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Center */}
        <div className="relative mt-1 p-3 rounded-md max-w-xs">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
            type="text"
            placeholder="Search"
          />
        </div>

        {/* Right */}
        <div>right</div>
      </div>
    </header>
  );
}

export default Header;
