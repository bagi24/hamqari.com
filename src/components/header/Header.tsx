import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full px-12 py-6 text-white bg-dark shadow-custom ">
      <nav className="container ">
        <ul className="flex font-sans text-base leading-6 cursor-pointer ">
          <li className="px-4 py-3 hover:text-light">მთავარი</li>
          <li className="px-4 py-3 hover:text-light">ჰამქარი</li>
          <li className="px-4 py-3 hover:text-light">ვაკანსია</li>
          <li className="px-4 py-3 hover:text-light">პასუხები</li>
          <li className="px-4 py-3 hover:text-light ">ჩვენს შესახებ</li>
        </ul>
      </nav>

      <button className="px-10 py-2 bg-white rounded-lg cursor-pointer text-light ">
        დარეგისტრირდი
      </button>
    </div>
  );
};

export default Header;
