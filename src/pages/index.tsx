import type { NextPage } from "next";
import Head from "next/head";
import { SetStateAction, useRef, useState } from "react";
import styled from "styled-components";
import Game from "../components/Game";
import Intro from "../components/Intro";
import Main from "../components/Main";

interface IBoxMove {
  coords: any;
}

const SBody = styled.div`
  display: flex;
  justify-content: center;
`;



const Home: NextPage = () => {

  const [view, setView] = useState("main")

  const selectedView = () => {
    switch (view) {
      case "main":
        return (<Main setView={setView} />)
        break;
      case "intro":
        return (<Intro setView={setView} />)
        break;
      case "game":
        return (<Game />)
        break;

      default:
        break;
    }
  }

  return (
    <>
      <Head>
        <title>ming wall</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SBody>
        {selectedView()}
      </SBody>
    </>
  );
};

export default Home;
