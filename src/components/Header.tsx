import React, { useEffect, useMemo, useState } from "react";
import {t} from "i18next";
import {Link} from "react-router-dom";
import { throttle } from 'lodash';
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import useWindowDimensions from "../hooks/useWindowDimensions";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Container = styled.div<{isShown: boolean}>`
  width: 100%;
  padding: 10px 0px;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  display: flex;

  visibility: ${props => props.isShown ? 'visible' : 'hidden'};
  animation: ${props => props.isShown ? fadeIn : fadeOut} 0.2s linear;
  transition: visibility 0.2s linear;
`;

const Content = styled.div`
  max-width: 880px;
  width: 100%;

  display: flex;

  justify-content: space-between;
	align-items: center;
`;

const Title = styled.span`
  margin-left: 20px;
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
  margin-right: 20px;
`;

const MenuLink = styled.a`
  font-size: 1.1rem;
  font-weight: bold;
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
    background-color: #D6CB67;
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
  const { height, width } = useWindowDimensions();
  const [isHeaderShown, setIsHeaderShown] = useState<boolean>(true);

  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        setIsHeaderShown(window.scrollY < height - 50);
      }, 300),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [throttledScroll]);

  return (
    <Container isShown={isHeaderShown}>
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
