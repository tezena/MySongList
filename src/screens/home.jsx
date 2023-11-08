import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import MusicPlayer from "../components/MusicPlayer";
import Playlists from "../components/playList";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

function Home() {
  const homeCss = css`
    display:flex;
  `;
  return (
    <div css={homeCss}>
      <Sidebar />
      <MusicPlayer />
      <Playlists />
    </div>
  );
}

export default Home;
