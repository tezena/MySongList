import Carousel1 from "./Carousel";
import PlaylistListItem from "./playListItem";
import { useRef } from "react";
import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

function Playlists() {
  const playlists = [
    {
      id: 1,
      title: "Bohemian Rhapsody",
      picture_medium:
        "https://png.pngtree.com/png-clipart/20220704/original/pngtree-retro-poster-with-ladies-portrait-png-image_8296293.png",
      creation_date: "2020",
    },
    {
      id: 2,
      title: "Hotel California",
      picture_medium:
        "https://png.pngtree.com/png-clipart/20220704/original/pngtree-retro-poster-with-ladies-portrait-png-image_8296293.png",
      creation_date: "2020",
    },
    {
      id: 3,
      title: "Billie Jean",
      picture_medium:
        "https://png.pngtree.com/png-clipart/20220704/original/pngtree-retro-poster-with-ladies-portrait-png-image_8296293.png",
      creation_date: "2020",
    },
    {
      id: 1,
      title: "Bohemian Rhapsody",
      picture_medium:
        "https://png.pngtree.com/png-clipart/20220704/original/pngtree-retro-poster-with-ladies-portrait-png-image_8296293.png",
      creation_date: "2020",
    },
    {
      id: 2,
      title: "Hotel California",
      picture_medium:
        "https://png.pngtree.com/png-clipart/20220704/original/pngtree-retro-poster-with-ladies-portrait-png-image_8296293.png",
      creation_date: "2020",
    },
    {
      id: 3,
      title: "Billie Jean",
      picture_medium:
        "https://png.pngtree.com/png-clipart/20220704/original/pngtree-retro-poster-with-ladies-portrait-png-image_8296293.png",
      creation_date: "2020",
    },
    {
      id: 1,
      title: "Bohemian Rhapsody",
      picture_medium:
        "https://png.pngtree.com/png-clipart/20220704/original/pngtree-retro-poster-with-ladies-portrait-png-image_8296293.png",
      creation_date: "2020",
    },
    {
      id: 2,
      title: "Hotel California",
      picture_medium:
        "https://png.pngtree.com/png-clipart/20220704/original/pngtree-retro-poster-with-ladies-portrait-png-image_8296293.png",
      creation_date: "2020",
    },
    {
      id: 3,
      title: "Billie Jean",
      picture_medium:
        "https://png.pngtree.com/png-clipart/20220704/original/pngtree-retro-poster-with-ladies-portrait-png-image_8296293.png",
      creation_date: "2020",
    },
  ];

  const mainContainerCss = css`
    width: 50%;

    @media (max-width: 720px) {
      width: 100%;
      padding-top: 0;

      position: relative;
      z-index: 3;
      top: -10%;
    }
    padding: 20px;
  `;
  const textContainerCss = css`
    display: flex;
    justify-content: space-between;
    padding: 0 3rem 1rem 0.3rem;
    font-family: "Ubuntu", sans-serif;
    font-weight: bolder;
    align-items: center;
    @media (max-width: 720px) {
      padding-top: 0;
      visibility: hidden;
    }
  `;

  const ulCss = css`
    overflow: auto;
    position: fixed;
    height: 70%;

    width: 28%;
    @media (max-width: 720px) {
      width: 60%;
      padding-right: 1rem;
      height: 50%;
    }
  `;

  return (
    <div css={mainContainerCss}>
      <div css={textContainerCss}>
        <h1 style={{ fontSize: "1.3rem" }}>All Songs</h1>
        <h3 style={{ fontWeight: "bold", color: "#f00e59" }}>1230</h3>
      </div>
      <ul css={ulCss}>
        {playlists.map((playlist) => {
          const { id, title, creation_date, picture_medium } = playlist;

          return (
            <PlaylistListItem
              key={id}
              title={title}
              imgSrc={picture_medium}
              creationDate={creation_date}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Playlists;
