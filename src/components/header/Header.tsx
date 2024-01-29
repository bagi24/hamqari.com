import { useState } from "react";

import { Link } from "react-router-dom";
import Login from "../login/Login";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div className="relative flex items-center justify-between w-full px-12 py-6 text-white bg-dark shadow-custom">
      <nav className="">
        <ul className="flex font-sans text-base leading-6 cursor-pointer ">
          <Link to="/">
            <li className="px-4 py-3 hover:text-light">მთავარი</li>
          </Link>

          <Link to="/hamqari">
            <li className="px-4 py-3 hover:text-light">ჰამქარი</li>
          </Link>

          <Link to="/jober">
            <li className="px-4 py-3 hover:text-light">ვაკანსია</li>
          </Link>

          <Link to="/questions">
            <li className="px-4 py-3 hover:text-light">პასუხები</li>
          </Link>

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
            className="absolute flex flex-col items-start justify-center gap-3 p-4 mt-4 bg-white rounded-lg shadow-custom left-112 top-12 text-dark"
          >
            <Link to="/aboutUs">
              <li className="cursor-pointer w-fullflex hover:bg-gray-light">
                ჩვენს შესახებ
              </li>
            </Link>
            <Link to="/blog">
              <li className="cursor-pointer hover:bg-gray-light">ბლოგი</li>
            </Link>
          </ul>
        )}
      </nav>

      <button
        onClick={() => setActive(true)}
        className="px-10 py-2 bg-white rounded-lg cursor-pointer text-light "
      >
        დარეგისტრირდი
      </button>

      {active && <Login />}
    </div>
  );
};

export default Header;
