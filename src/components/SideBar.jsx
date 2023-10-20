import React from "react";
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

const Sidebar = () => {
  return (
    <Card className="h-[calc(100vh-2rem)] w-1/4 p-4 shadow-3xl  flex flex-col bg-[#F00E59] text-white rounded-[20px] mx-10">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List className="flex-col">
        {listItems.map((item) => {
          return (
            <ListItem className=" listItem hover:-translate-y-2  duration-500 group flex  relative ">
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
