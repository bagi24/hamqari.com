import React from "react";

const Catalog = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-14">
      <div className="text-2xl bg-dark text-white px-7 py-1  rounded-[70px] ">
        გაიარე რეგისტრაცია კატალოგში დამატებისთვის
      </div>

      <div className="mt-20 ">
        <div className="flex  flex-col   items-center justify-between mb-6 col-span-1 border-solid border rounded-3xl border-black-rgba w-64 h-[460px]">
          <img
            className="object-cover object-center w-32 h-32 mt-12 rounded-full cursor-pointer "
            src="https://res.cloudinary.com/dhcvuhmzy/image/upload/v1700422763/inbound2348144844271282829_1_msol6r.jpg"
            alt=""
          />
          <div className="text-base leading-tight break-words cursor-pointer text-dark">
            <p className="text-xl font-semibold text-center">შორენა ქორჩლავა</p>
            <p className="text-base text-center text-lips">მხატვარი</p>
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
      </div>
    </div>
  );
};

export default Catalog;
