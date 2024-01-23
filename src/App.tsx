import React from "react";
import Header from "./components/header/Header";
import Title from "./components/title/Title";
import Catalog from "./components/catalog/Catalog";
import { MyContext } from "./createContext/MyContext";

function App() {
  interface TypeData {
    firstname: string;
    professions: string;
    imgSrc: string;
  }

  const personData: TypeData = {
    firstname: "ნატალია სანაკოევა",
    professions: "მხატვარი",
    imgSrc:
      "https://res.cloudinary.com/dhcvuhmzy/image/upload/v1700422763/inbound2348144844271282829_1_msol6r.jpg",
  };
  return (
    <>
      <MyContext.Provider value={{ value: personData }}>
        <Header />
        <Title />
        <Catalog />
      </MyContext.Provider>
    </>
  );
}

export default App;
