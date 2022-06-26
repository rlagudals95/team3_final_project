import React, { Suspense } from "react";
import { useRecoilValue } from "recoil";

import Card from "../components/Card";
import { recoilStarCountState } from "../recoil/testAtom";

const MainPage = () => {
  const recoilStarCount = useRecoilValue(recoilStarCountState);

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
      {/* Suspense를 사용하면 컴포넌트가 렌더링되기 전까지 기다릴 수 있습니다 */}
      <Suspense fallback={<div>로딩중입니다.</div>}>{recoilStarCount}</Suspense>
    </>
  );
};

export default MainPage;
