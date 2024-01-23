import React, { useContext } from "react";
import { MyContext } from "../../../createContext/MyContext";

const Card = () => {
  const contextValue = useContext(MyContext);

  if (!contextValue) {
    return <div>Error: Context value is undefined</div>;
  }

  const { value } = contextValue;

  return (
    <div className="flex gap-5 mt-20 ">
      {value.map((person, index) => (
        <div
          key={index}
          className="flex  flex-col   items-center justify-between mb-6 col-span-1 border-solid border rounded-3xl border-black-rgba w-64 h-[460px]"
        >
          <img
            className="object-cover object-center w-32 h-32 mt-12 rounded-full cursor-pointer "
            src={person.imgSrc}
            alt="prof"
          />
          <div className="text-base leading-tight break-words cursor-pointer text-dark">
            <p className="text-xl font-semibold text-center">
              {person.firstname}
            </p>
            <p className="text-base text-center text-lips">
              {person.professions}
            </p>
            <div className="flex justify-center">
              <img
                className="mr-1 "
                src="https://hamqari.com/static/media/star.691f1e6e00d1ce6659a2f4e58c01f26b.svg"
                alt=""
              />
              <img
                className="mr-1 "
                src="https://hamqari.com/static/media/star.691f1e6e00d1ce6659a2f4e58c01f26b.svg"
                alt=""
              />
              <img
                className="mr-1 "
                src="https://hamqari.com/static/media/star.691f1e6e00d1ce6659a2f4e58c01f26b.svg"
                alt=""
              />
              <img
                className="mr-1 "
                src="https://hamqari.com/static/media/star.691f1e6e00d1ce6659a2f4e58c01f26b.svg"
                alt=""
              />
              <img
                className="mr-1 "
                src="https://hamqari.com/static/media/star.691f1e6e00d1ce6659a2f4e58c01f26b.svg"
                alt=""
              />
            </div>

            <div className="flex items-center justify-center ">
              <button className="bg-[#0085FF] text-white text-[23px] text-center px-10 mb-10  rounded-3xl  text-3xl	 ">
                მეტი
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
