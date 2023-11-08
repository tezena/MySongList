/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import MusicPlayerSlider from "./musicPlayerSlider";


const Img1css = css`
  height: auto;
  max-width: 100%;
  border-radius: 30px;
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:hover {
    transform: translateY(-2px);

    /* Equivalent to hover:shadow-lg in Tailwind */
  }
`;
//  box-shadow: 0 15px 1px -7px rgba(240, 14, 89, 0.6);

const shadowMd = css`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
`;

const combinedStyles = css`
  ${Img1css};


`;





const ImgShine = css`
  /* Base styles for the element */
  position: absolute;
  top: 0;
  left: -10%;
  right: 0;
  bottom: 0;
  width: 50%;
  z-index: 10;
  display: block;
  transform: skewX(0deg);
  background: linear-gradient(to right, transparent, white);
  opacity: 0.6;
  

  &:hover {
    animation: shine 1s 1; /* Use the 'shine' keyframes */
  }
  @keyframes shine {
    0% {
      left: 0;
    }
    100% {
      left: 125%;
    }
  }
`;
const Invisiblediv=css`
        position: relative;
        display: flex;
         `
  
const MusicPlayer = () => {
  const mainContainer = css`
    width: 35%;
    height:100%;
    margin: auto;
    text: center;
    padding: 20px;
 
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 68%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  const textDivCss = css`
    margin-top:2rem;
    padding: .5rem 0;
    height:40%
  `
   const singerNameCss = css`
     font-family: "Roboto  ", sans-serif;
     font-weight: 300;
     font-size: 1.2rem;
     opacity: .3;
   `;

  return (
    <div css={mainContainer}>
      <div css={Invisiblediv}>
        <img
          src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
          css={combinedStyles}
          alt=""
        />
      </div>
      <div css={textDivCss}>
        <div
          css={css`
            margin-bottom: 1rem;
          `}
        >
          <h1
            css={css`
              color: black;
              font-size: 2rem;
              font-family: "Lobster", sans-serif;
              font-weight: bolder;
            `}
          >
            Bohemian Rhapsody
          </h1>
          <h3 css={singerNameCss}>Ed Sheeran</h3>
        </div>

        <MusicPlayerSlider></MusicPlayerSlider>
      </div>
    </div>
  );
};

export default MusicPlayer;
