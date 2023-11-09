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

  const secondContainerCss = css`
  display:flex;
  @media (max-width: 720px): {
    flex-size: column,
  }
  `;
  return (
    <div css={homeCss}>
      <Sidebar />
      <div css={secondContainerCss}>
        <MusicPlayer />
        <Playlists />
      </div>
    </div>
  );
}

export default Home;
