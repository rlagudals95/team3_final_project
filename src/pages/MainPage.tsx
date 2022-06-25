import React, { Suspense } from "react";

import Card from "../components/Card";

const MainPage = () => {
  return (
    <>
      <Card
        cardTitle="카드 타이틀"
        cardDesc="카드 내용"
        styleCustom={{
          background: "white",
          width: "100%",
          height: "200px",
          border: "1px solid grey",
          padding: "8px",
        }}
      />
    </>
  );
};

export default MainPage;
