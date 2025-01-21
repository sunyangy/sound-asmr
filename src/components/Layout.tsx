import React from "react";
import Header from "./Header";
import Sounds from "./Sounds";
import Player from "./Player";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Header></Header>
      <Sounds />
      <Footer />
      {/* <Player /> */}
    </>
  );
}
