import { Navbar as bar } from "react-bootstrap";
import { NavLink as Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Home } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import {
  PrimaryColor,
  HoverColor,
  PrimaryTextColor,
  Border_Radius,
} from "../../App.styles";

export const HomeButton = styled(Button)`
  background-color: ${PrimaryColor};
  padding: 18px 20px;
  border-radius: ${Border_Radius} 0px 0px ${Border_Radius};
  &:hover {
    background-color: ${HoverColor};
  }
`;
export const Navbar = styled(bar)`
  padding: 0 16px 0 0;
  border-radius: ${Border_Radius};
  & .navbar-brand {
    padding: 0;
    margin-right: 10px;
  }
`;
export const HomeIcon = styled(Home)`
  color: ${PrimaryTextColor};
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const NavbarToggler = styled(bar.Toggle)`
  &.navbar-toggler {
    border-color: ${PrimaryTextColor};
  }
  &.navbar-toggler:hover {
    border-color: ${HoverColor};
  }
`;
const navBrandLink = css``;
const navItemLink = css`
  &.active {
    color: ${HoverColor} !important;
  }
  &:hover {
    color: ${PrimaryColor} !important;
  }
`;
const getNavLinkStyles = (props) => {
  if (props.$navBrand) {
    return navBrandLink;
  } else if (props.$navItem) {
    return navItemLink;
  }
};
export const NavLink = styled(Link)`
  color: ${PrimaryTextColor} !important;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  ${getNavLinkStyles}
`;
