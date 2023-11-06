import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

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

const listItems = [
  {
    icon: <PresentationChartBarIcon className="h-5 w-5 " />,
    text: "Add Music",
  },
  {
    icon: <InboxIcon className="h-5 w-5" />,
    text: "Update",
  },
  {
    icon: <UserCircleIcon className="h-5 w-5" />,
    text: "profile",
  },
  {
    icon: <ShoppingBagIcon className="h-5 w-5" />,
    text: "  E-Commerce",
  },
];

const CardCss = css`
  position:fixed;
  left:5%;
  height: 80%;
  width: 25%;
  padding: 1rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  background-color: #f00e59;
  color: white;
  border-radius: 20px;

  margin: 0 10px;
`;

const ListItemCss = css`
  padding: 1.5rem;
  font-size: 1.5rem;
  font-weight: lighter;
  transition: transform 0.5s;
  display: flex;
  position: relative;
  &:hover {
    transform: translateY(-5px);
  }
`;

const shineDiveCss = css`
  position: absolute;
  top: 0;
  inset: 0;
  height: 100%;
  width: 50%;
  z-index: 5;
  display: block;
  transform: skewX(-12deg);
  background: linear-gradient(to right, transparent, white);
  opacity: 0;
  transition: transform 0.5s, background 0.5s, opacity 0.5s;

  &:hover {
    animation: shine 1.3s 1;
  }
  @keyframes shine {
    100% {
      left: "125%";
    }
  }
`;
const Sidebar = () => {
  return (
    <div
      css={CardCss}
      //   className="h-[calc(100vh-2rem)] w-1/4 p-4 shadow-3xl  flex flex-col bg-[#F00E59] text-white rounded-[20px] mx-10"
    >
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List className="flex-col">
        {listItems.map((item) => {
          return (
            <ListItem css={ListItemCss}>
              <ListItemPrefix>{item.icon}</ListItemPrefix>
              {item.text}
              <div css={shineDiveCss} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Sidebar;
// className =
//   "absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-60 group-hover:animate-shine";
