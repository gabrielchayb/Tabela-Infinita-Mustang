import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: #0B0B0B;
  display: flex;
  flex-direction: column;
  @media (min-width: 769px) {
    height: 120px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 50px;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  margin-top: 50px;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  width: 100%;
  padding: 40px;
  margin: auto;
  font-size: 20px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  @media (min-width: 1024px) {
    font-size: 50px;
    margin-left: 30%;
  }
  @media (max-width: 769px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  margin-top: -30px;
  background: none;
  border: none;
  color: white;
  font-size: 50px;
  cursor: pointer;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 769px) {
    display: none;
  }
`;