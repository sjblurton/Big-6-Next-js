import React, { useEffect } from "react";
import { Header, TimeLine } from "../components/profile";
import { BottomTabs, Seo } from "../shared";
import useFirestore from "../src/hooks/firestore";
import { withProtected } from "../src/hooks/routes";

const HistoryPage = () => {
  const { collections, getCollection } = useFirestore();

  useEffect(() => {
    collections.length === 0 && getCollection();
  }, [collections, getCollection]);

  return (
    <>
      <Seo title="History" />
      <Header title="History" />
      <BottomTabs isPage="clipboard" />
      <TimeLine days={collections} />
    </>
  );
};

export default withProtected(HistoryPage);
