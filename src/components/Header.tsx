import React from "react";
import {t} from "i18next";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;

  background-color: #F4F4F4;
`;

const Content = styled.div`
  max-width: 880px;
  width: 100%;

  display: flex;

  justify-content: space-between;
	align-items: center;
`;

const Title = styled.span`
  margin-left: 40px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

const Menu = styled.ul`
  list-style-type: none;
  right: 0px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  list-style-type: none;
  float: left;
  margin-right: 40px;
`;

const MenuLink = styled.a`
  font-size: 1.1rem;
  text-decoration: none;
  display: inline-block;
  position: relative;
  color: #333;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 9px;
    bottom: 0;
    left: 5px;
    background-color: #b3a4c6;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    z-index: -1;
  }

  &:hover:after {
    text-decoration: none;
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Title>{t<string>("header.title")}</Title>
        <Menu>
          <MenuItem>
            <MenuLink href="#">{t<string>("header.home")}</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#policy">{t<string>("header.policy")}</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="#voicebank">
              {t<string>("header.voicebank")}
            </MenuLink>
          </MenuItem>
        </Menu>
      </Content>
    </Container>
  );
};

export default Header;
