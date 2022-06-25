import React from "react";

const Header = () => {
  return (
    <header className="p-4">
      <div className="flex items-center justify-between bg-opacity-50">
        <div className="mx-2 text-center">
          <div className="font-extrabold xs:text-3xl md:text-3xl">
            <a
              target="_blank"
              className="hover:text-blue-400"
              href="https://recoiljs.org/docs/introduction/getting-started"
            >
              레시피 프로젝트
            </a>
          </div>
        </div>
        <div>메뉴</div>
      </div>
    </header>
  );
};

export default Header;
