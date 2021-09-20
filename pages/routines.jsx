import React from "react";
import { Header } from "../components/profile";
import Routines from "../components/routines";
import { BottomTabs, Seo } from "../shared";

const RoutinesPage = () => {
  return (
    <>
      <Seo title="Routines" />
      <Header title="Routines" />
      <Routines />
      <BottomTabs isPage="calender" />
    </>
  );
};

export default RoutinesPage;
