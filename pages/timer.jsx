import React from "react";
import { Header } from "../components/profile";
import Timer from "../components/timer";
import { BottomTabs, Seo } from "../shared";

const TimerPage = () => {
  return (
    <>
      <Header title="Timer" />
      <Seo title="Timer" />
      <Timer />
      <BottomTabs isPage="watch" />
    </>
  );
};

export default TimerPage;
