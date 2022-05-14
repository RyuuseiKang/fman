import React from "react";
import { t } from "i18next";
import styled from "styled-components";
import Carousel from 'framer-motion-carousel';

import Background from "../assets/background.png";
import { ReactComponent as Arrow } from '../assets/right-arrow.svg';

import character, { Description, DescriptionTags } from "../assets/character/character";
import i18n from "../locale/i18n";

const Container = styled.div`
  background: url(${Background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

`;

const Viewport = styled.div`
  flex: 1;
  width: 100wh;
	overflow: hidden;
	flex-direction: row;

  justify-content: center;
  align-items: center;
  display: flex;
  padding: 30px 0px 0px 0px;

  @media (min-width: 865px) {
    height: 100vh;
    padding: 0px;
  }
`;

const Content = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemContainer = styled.div`
  width: 100vw;
  max-width: 880px;
  align-items: center;

  @media (min-width: 865px) {
    display: flex;
    justify-content: center;
  }
`;

const CharacterDescription = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;    
  flex-direction: column;
    align-items: center;

  @media (max-width: 865px) {
    padding: 0px 10vw 0vh 10vw;
    align-items: center;
    
  justify-content: space-around;
  flex-direction: row;
    display: flex;
  }
`;

const CharacterContainer = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  z-index: 1;
  right: 0;

  display: flex;
`;

const CharacterImage = styled.img`
  width: "50vw";
`;

const CharacterNameContainer = styled.div`
  flex-direction: column;
  padding: 0px 0px 30px 0px;
  
  display: flex;
  justify-content: center;

  @media (max-width: 865px) {
    padding: 0px;
  }
`;

const CVName = styled.p`
  font-family: 'Mochiy Pop Regular';
  text-align: center;
  margin: 0px;
  font-size: 1.4rem;
  font-weight: bold;
  color: transparent;

  display: block;
  white-space: nowrap;  

  box-sizing: border-box;
  -webkit-text-stroke: 1px ${({ color }) => color};

  text-shadow: 0px 0px 3px #ffffffcf;

  @media (max-width: 865px) {
    font-size: 1rem;
    -webkit-text-stroke: 0.5px ${({ color }) => color};
  }
`;

const NameImg = styled.img`
  height: 7vh;
  object-fit: contain;
  margin-left: -5px;
  margin-bottom: 15px;

  @media (min-width: 865px) {  
    height: 10vw;
  }
`;

const ReadMore = styled.a`
  border: 3px solid ${({ color }) => color};
  padding: 10px 15px;
  cursor: pointer;
  display: inline-flex;
  
  justify-content: center;
  align-items: center;

  background-color: #ffffffa0;
  text-decoration: none;

  fill: ${({ color }) => color};
  color: ${({ color }) => color};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ color }) => color};
    color: #FAFAFA;
    fill: #FAFAFA;
  }
`;

const ReadMoreText = styled.span`
  margin-left: 10px;
  font-weight: bold;
`;

const WaitForAvailable = styled.span`
  font-weight: bold;

  color: ${({ color }) => color};
  
  font-size: 1.2rem;
`;

const MainContent: React.FC = () => {
  return (
    <Container>
      <Viewport>
        <Carousel renderArrowLeft={() => <div />} renderArrowRight={() => <div />} renderDots={() => <div />} autoPlay={false} interval={5000} loop>
          {
            character.map((item, index) => {
              const { id, mini_image, text, color, cv, is_vaild } = item.path;

              return (
                <Content>
                  <ItemContainer>
                    <CharacterDescription>
                      <CharacterNameContainer>
                        <NameImg src={text} alt={id} />
                        <CVName color={color}>CV. {cv[i18n.language as keyof DescriptionTags]}</CVName>
                      </CharacterNameContainer>
                      {
                        is_vaild ?
                          (<ReadMore color={color} href={`#${id}`}>
                            <Arrow />
                            <ReadMoreText>{t<string>("main.readMore")}</ReadMoreText>
                          </ReadMore>) : (
                            <WaitForAvailable color={color}>{t<string>("main.waitForAvailable")}</WaitForAvailable>
                          )
                      }
                    </CharacterDescription>

                    <CharacterContainer>
                      <CharacterImage src={mini_image} alt={id} style={{ height: "60vh" }} />
                    </CharacterContainer>
                  </ItemContainer>
                </Content>
              );
            })
          }
        </Carousel>
      </Viewport>
    </Container>
  );
};

export default MainContent;
