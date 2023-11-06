import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { LuListMusic } from "react-icons/lu"
import { TbMusicPlus, TbMusicCheck, TbMusicMinus } from "react-icons/tb";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

const IconsCss = css`
   height:2rem;
   width:2rem;
`

const listItems = [
  {
    icon: <LuListMusic css={IconsCss} />,
    text: "All Songs ",
  },
  {
    icon: <TbMusicPlus css={IconsCss} />,
    text: "Add Songs",
  },
  {
    icon: <TbMusicCheck css={IconsCss} />,
    text: "Update Song",
  },
  {
    icon: <TbMusicMinus css={IconsCss} />,
    text: "Delete Song",
  },
];

const CardCss = css`
  position: fixed;
  left: 5%;
  height: 80%;
  width: 25%;
  padding: 1rem;
  box-shadow: rgba(240, 14, 89, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(240, 14, 89, 0.25) 0px -2px 6px 0px inset;
  display: flex;
  flex-direction: column;
  background-color: #f00e59;
  color: white;
  border-radius: 20px;
  font-family: "Lobster", sans-serif;

  margin: 0 10px;
`;

const ListItemCss = css`
  padding: 1.5rem;
  font-size: 2rem;
  font-weight:lighter;
  transition: transform 0.5s;
  display: flex;
  align-items:center;
  position: relative;
  width:100%
  &:hover {
    transform: translateY(-5px);
  }
`;

const shineDiveCss = css`
  position: absolute;
  top: 0;
  inset: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  display: block;
  transform: skewX(0deg);
  background: linear-gradient(to right, transparent, white);
  opacity: 0;
  transition: transform 0.5s, background 0.5s, opacity 0.5s;

  &:hover {
    animation: shine 1.3s;
  }
  @keyframes shine {
    100% {
      left: "125%";
    }
  }
`;

const Sidebar = () => {
  return (
    <div css={CardCss}>
      <div
        css={css`
          font-size: 2.5rem;
          padding: 0.5rem 0.5rem 1.5rem;
        `}
      >
        <h1>Play list</h1>
      </div>
      <ui className="flex-col">
        {listItems.map((item) => {
          return (
            <li css={ListItemCss}>
              <div css={css``}>{item.icon}</div>
              <div css={css`margin:0 1rem`}>{item.text}</div>
              <div css={shineDiveCss} />
            </li>
          );
        })}
      </ui>
    </div>
  );
};

export default Sidebar;
// className =
//   "absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-60 group-hover:animate-shine";
