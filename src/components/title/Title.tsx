import React from "react";

const Title = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-20 ">
      <h3 className="px-10 py-3 text-dark rounded-20 bg-gradient-to-r from-[#f0ff00] via-transparent to-[#58cffb]   mb-16">
        საიტის ბეტა ვერსია
      </h3>

      <h1 className="text-5xl ab:text-3xl ">ეძებ სამსახურს ?</h1>

      <h1 className="text-5xl ab:text-3xl ">ჰამქარი დაგეხმარება</h1>

      <p className="mt-4 text-base">
        შესთავაზე 3 000 000 -ზე მეტ პოტენციურ მომხმარებელს
        <span className="block">
          შენი მომსახურება ან თავად დაასაქმე შენი რჩეული ჰამქარი
        </span>
      </p>
    </div>
  );
};

export default Title;
