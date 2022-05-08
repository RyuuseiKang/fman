import {t} from "i18next";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 10px 0px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  border-top: 1px solid #b3a4c6;
  max-width: 880px;
  width: 100%;

  display: flex;

  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

const Copyright = styled.p`
  font-family: "Pretendard";
  font-weight: bold;
  font-size: 0.8rem;
  color: #b3a4c6;
`;

const PageTop = styled.a`
  font-size: 0.8rem;
  text-decoration: none;
  font-weight: bold;
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

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <Copyright>{t<string>("footer.copyright")}</Copyright>
        <PageTop href="#">{t<string>("footer.pageTop")}</PageTop>
      </Content>
    </Container>
  );
};

export default Footer;
