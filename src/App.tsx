import React from "react";
import Home from "./pages/home/Home";
import Vacancy from "./pages/vacancy/Vacancy";
import { MyContext } from "./createContext/MyContext";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Questions from "./pages/question/Questions";
import Hamqari from "./pages/hamqari/Hamqari";

function App() {
  interface TypeData {
    id: number;
    firstname: string;
    professions: string;
    imgSrc: string;
  }

  const personData: TypeData[] = [
    {
      id: 1,
      firstname: "ნატალია სანაკოევა",
      professions: "მხატვარი",
      imgSrc:
        "https://res.cloudinary.com/dhcvuhmzy/image/upload/v1700486966/387452204_1098237621547056_1364333652963098833_n_1_j2tpx9.jpg",
    },
    {
      id: 2,
      firstname: "შორენა ქორჩლავა",
      professions: "ხელოვანი",
      imgSrc:
        "https://res.cloudinary.com/dhcvuhmzy/image/upload/v1700925096/inbound39813037102528608_1_yagclq.jpg",
    },
    {
      id: 3,
      firstname: "ირინე ჭინჭარაძე",
      professions: "მქარგველი",
      imgSrc:
        "https://res.cloudinary.com/dhcvuhmzy/image/upload/v1700336106/576AF74D-0A31-450A-815C-A6AE9DCCBD7E_1_uagnrd.jpg",
    },
    {
      id: 4,
      firstname: "ფიქრია ზარიძე",
      professions: "მეწარმე",
      imgSrc:
        "https://res.cloudinary.com/dhcvuhmzy/image/upload/v1705853579/IMG_20170126_235247_n6yedd.jpg",
    },
    {
      id: 5,
      firstname: "თამარ ჩუბინიძე",
      professions: "დიზაინერი",
      imgSrc:
        "https://res.cloudinary.com/dhcvuhmzy/image/upload/v1702114316/inbound4021103901620688016_1_ek1uxk.jpg",
    },

    {
      id: 6,
      firstname: "ნინო ჩიბურდანიძე",
      professions: "მოჭადრაკე",
      imgSrc:
        "https://res.cloudinary.com/dhcvuhmzy/image/upload/v1702113793/inbound2051075269184772581_1_wggtw9.jpg",
    },

    {
      id: 7,
      firstname: "ხათუნა ნიკურაძე",
      professions: "დამლაგებელი",
      imgSrc:
        "https://res.cloudinary.com/dhcvuhmzy/image/upload/v1703878767/inbound1355921325708927153_1_hmc5sj.jpg",
    },

    {
      id: 8,
      firstname: "ნინო კაკულია",
      professions: "დიზაინერი",
      imgSrc:
        "https://res.cloudinary.com/dhcvuhmzy/image/upload/v1702973776/inbound3743080655339923140_1_rsanhj.jpg",
    },
    {
      id: 9,
      firstname: "ქეთო ყარაულაშვილი",
      professions: "დიზაინერი",
      imgSrc:
        "https://res.cloudinary.com/dhcvuhmzy/image/upload/v1700336106/576AF74D-0A31-450A-815C-A6AE9DCCBD7E_1_uagnrd.jpg",
    },

    {
      id: 10,
      firstname: "ენძელა მაჭავარიანი",
      professions: "დეპუტატი",
      imgSrc:
        "https://res.cloudinary.com/dhcvuhmzy/image/upload/v1700486331/291420321_1010851529795007_7919029207625865670_n_1_casvck.jpg",
    },

    {
      id: 11,
      firstname: "გუგული მაღრაძე",
      professions: "დეპუტატი",
      imgSrc:
        "https://res.cloudinary.com/dhcvuhmzy/image/upload/v1701021589/ql3xn0bix50mfhzmfkii.jpg",
    },

    {
      id: 12,
      firstname: "პატრისია მაისურაძე",
      professions: "ოპერატორი",
      imgSrc:
        "https://res.cloudinary.com/dhcvuhmzy/image/upload/v1700253196/jpg_sg0ycx.jpg",
    },
  ];

  return (
    <>
      <MyContext.Provider value={{ value: personData }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jober" element={<Vacancy />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/hamqari" element={<Hamqari />} />
        </Routes>
      </MyContext.Provider>
    </>
  );
}

export default App;
