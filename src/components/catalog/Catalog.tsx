import React, { useRef, useEffect } from "react";
import Card from "./card/Card";

const Catalog = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const { current } = containerRef;

      if (current) {
        current.scrollLeft += current.offsetWidth;
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [containerRef]);

  return (
    <div className="flex flex-col items-center justify-center mt-20 mb-14">
      <div className="text-2xl bg-dark text-white px-7 py-1  rounded-[70px] ">
        გაიარე რეგისტრაცია კატალოგში დამატებისთვის
      </div>
      <div
        ref={containerRef}
        className="flex w-full m-8 overflow-x-scroll border-gray-300 border-solid border-1 gap-x-1 "
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Catalog;
