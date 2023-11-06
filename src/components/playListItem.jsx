import { css } from "@emotion/react";
import { BsPlayCircle } from "react-icons/bs";
/** @jsxImportSource @emotion/react */

const PlaylistListItem = ({ id, title, imgSrc, creationDate }) => {
  //   const createdYear = getYearFromDate(creationDate);

  const imageCss = css`
    width: 5rem;
    height: 4rem;
    border-radius: 7px;
    margin: 0 1rem;
    object-fit: contian;
    box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.4), 0 0 1px 0 rgba(0, 0, 0, 0.1);
  `;
  const listItemCss = css`
    width: 100%;
    display: flex;
    padding: 0.8rem 0 0.8rem 0.2rem;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.15) 0 1.95px 0;
  `;

  const playListDetailCss = css`
    width:14rem;
    display: flex;
    justify-content: space-between;
    align-items:center;
    
  `;

  const songTitleCss = css`
    margin: 0 0.5 rem;
    font-family: "Lobster", sans-serif;
    font-weight: semi-bold;
  `;
  const singerNameCss = css`
    font-family: "Roboto  ", sans-serif;
    font-weight: 300;
    font-size:.8rem;
    opacity:.7
  `;

  const dateTextCss = css`
    font-family: "Ubonto ", sans-serif;
    font-weight: 600;
    font-size: 0.8rem;
  `;
  

  return (
    <li css={listItemCss}>
      <BsPlayCircle
        style={{
          color: "#f00e59",
          height: "2rem",
          width: "2rem",
          strokeWidth: ".1px",
        }}
      />
      <img src={imgSrc} alt="playlist-img" css={imageCss} />
      <div css={playListDetailCss}>
        <div>
          <h1 css={songTitleCss}>{title}</h1>
          <h3 css={singerNameCss}>Ed Sheeran</h3>
        </div>

        <h3 css={dateTextCss}>4:30</h3>
      </div>
    </li>
  );
};

export default PlaylistListItem;
