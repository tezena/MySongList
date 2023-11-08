import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    console.log(link);
  };

  const mainContainerCss = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 6rem;
    width: 100%;
  `;
  const ulCss = css`
    display: flex;
    gap: 5rem;
    font-size: 1.125rem;
    width: 50%;
    font-family: "Ubonto ", sans-serif;
    font-weight: 600;
    font-size: 1.2rem;
  `;
  const activeLinkCss = () => css`
    margin-top: 0.5rem;
    height: 4px;
    border-radius: 0.125rem;
  `;

  const linkCss = css`
    font-weight: semi-bold;
  `;
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "20px",
    border: "solid .5px grey",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <nav
      css={css`
        text: balck;
        padding: 8;
      `}
    >
      <div css={mainContainerCss}>
        <ul css={ulCss}>
          <li>
            <a href="/" onClick={() => handleLinkClick("Home")} css={linkCss}>
              <p>Home</p>
              <div
                css={activeLinkCss}
                style={{
                  backgroundColor:
                    activeLink == "Home" ? "rgba(240, 14, 89, 1)" : "white",
                }}
              ></div>
            </a>
          </li>
          <li className="">
            <a
              href="/about"
              css={linkCss}
              onClick={() => handleLinkClick("About Us")}
            >
              <p>Albums</p>
              <div
                css={activeLinkCss}
                style={{
                  backgroundColor:
                    activeLink == "About Us" ? "rgba(240, 14, 89, 1)" : "white",
                }}
              ></div>
            </a>
          </li>
          <li className="">
            <a
              href="/about"
              css={linkCss}
              onClick={() => handleLinkClick("About Us")}
            >
              <p>About Us</p>
              <div
                css={activeLinkCss}
                style={{
                  backgroundColor:
                    activeLink == "About Us" ? "rgba(240, 14, 89, 1)" : "white",
                }}
              ></div>
            </a>
          </li>
        </ul>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
    </nav>
  );
};

export default Navbar;
