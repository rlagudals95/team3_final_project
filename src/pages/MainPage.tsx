import React, { Suspense } from "react";

import Card from "../components/Card";

const MainPage = () => {
  return (
    <>
      <div className="bg-secondary-1 flex items-center min-h-screen bg-white dark:bg-gray-900">
        <div className="container max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <div className="max-w-md mx-auto my-10 w-full">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
