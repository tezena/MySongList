/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Img1css = css`
  height: auto;
  max-width: 50%;
  border-radius: 30px; 
  transition: box-shadow 0.3s ease-in-out; 
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.1); /* Equivalent to hover:shadow-lg in Tailwind */
  }
`;

const shadowMd = css`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.3);
`;

const combinedStyles = css`
  ${Img1css};

  ${shadowMd};
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

 
 &:hover{
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
    width:25%;
    margin:auto;
    text:center;
    padding:20px;
    display:flex;
    flex-direction:column;
    position:fixed;
  `
  return (
    <div  css={mainContainer}>
      <div  css={Invisiblediv} >
      
        <img
          src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
          css={combinedStyles}
         
          alt=""
        />
      </div>
      <h1
        css={css`
          color: red;
          fontsize: 40px;
        `}
      >
        Hello world.
      </h1>
    </div>
  );
};

export default MusicPlayer;
