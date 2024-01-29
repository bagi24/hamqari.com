import { useState } from "react";

import { Link } from "react-router-dom";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center justify-between w-full px-12 py-6 text-white bg-dark shadow-custom ">
      <nav className="container ">
        <ul className="flex font-sans text-base leading-6 cursor-pointer ">
          <Link to="/">
            <li className="px-4 py-3 hover:text-light">მთავარი</li>
          </Link>

          <li className="px-4 py-3 hover:text-light">ჰამქარი</li>

          <Link to="/jober">
            <li className="px-4 py-3 hover:text-light">ვაკანსია</li>
          </Link>

          <li className="px-4 py-3 hover:text-light">პასუხები</li>

          <li
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex px-4 py-3 hover:text-light hover:inline-flex"
          >
            ჩვენს შესახებ
          </li>
        </ul>
        {isHovered && (
          <ul
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="absolute flex flex-col items-start justify-center gap-3 p-4 mt-4 bg-white rounded-lg bg-dark shadow-custom left-112 top-12 text-dark"
          >
            <Link to="/aboutUs">
              <li className="cursor-pointer w-fullflex hover:bg-gray-light">
                ჩვენს შესახებ
              </li>
            </Link>
            <li className="cursor-pointer hover:bg-gray-light">ბლოგი</li>
          </ul>
        )}
      </nav>

      <button className="px-10 py-2 bg-white rounded-lg cursor-pointer text-light ">
        დარეგისტრირდი
      </button>
    </div>
  );
};

export default Header;
