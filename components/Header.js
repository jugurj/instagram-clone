import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header>
      <div className="flex justify-between bg-white max-w-6xl">
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24 h-24">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://marjanvanaubel.com/wp-content/uploads/2019/11/instagram-logo.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Center */}
        <div>
          <input type="text" placeholder="Search" />
        </div>

        {/* Right */}
        <div>right</div>
      </div>
    </header>
  );
}

export default Header;
