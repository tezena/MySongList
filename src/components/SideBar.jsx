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

  height: calc(100vh - 2rem);
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
padding:1.5rem ;
fontSized:1.5rem ;
fontWeight:lighter;
`

const Sidebar = () => {
  return (
     <Card    css={CardCss}
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
            <ListItem className="hover:-translate-y-2  duration-500 group flex  relative ">
              <ListItemPrefix>{item.icon}</ListItemPrefix>
              {item.text}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-60 group-hover:animate-shine" />
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
};

export default Sidebar;
