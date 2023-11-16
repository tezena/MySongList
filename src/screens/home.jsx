import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import MusicPlayer from "../components/MusicPlayer";
import Playlists from "../components/playList";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

function Home() {
  const homeCss = css`
    display: flex;
    width: 100%;
    padding: 2% 2% 2% 4%;
  `;

  const secondContainerCss = css`
    width: 70;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 720px) {
      display: block;
    }
  `;

  return (
    <div css={homeCss} name="home">
      <Sidebar />
      <div css={secondContainerCss} name="secondContainer">
        <MusicPlayer />
        <Playlists />
      </div>
    </div>
  );
}

export default Home;
