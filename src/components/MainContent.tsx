import React from "react";
import {t} from "i18next";
import styled from "styled-components";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Aru from "../assets/aru.png";
import Machan from "../assets/machan.png";
import MainContentBackground from "../assets/maincontent-background.png";

const Container = styled.div`
  background: url(${MainContentBackground});
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

  @media (min-width: 768px) {
    height: 100vh;
  }
`;

const Content = styled.div`
  width: 100vw;
  max-width: 880px;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const CharacterDescription = styled.div`
  padding: 0px 15vw;
`;

const CharacterImage = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  z-index: 1;
  right: 0;

  display: flex;

  @media (min-width: 768px) {
    position: absolute;
  }
`;

const CharacterNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 5vh 0px;
`;

const CVName = styled.span`
  font-size: 1.2rem;
  font-family: "Pretendard";
  font-weight: bold;
  color: #b3a4c6;
`;

const CharacterName = styled.span`
  font-size: 6rem;
  font-family: "Pretendard";
  font-weight: bold;
  color: #ffffffe0;
  -webkit-text-stroke: 3px #b3a4c6;
`;

const ReadMore = styled.div`
  border: 3px solid #b3a4c6;
  padding: 10px;
  cursor: pointer;
  display: inline-block;
  color: #b3a4c6;
  background-color: #ffffffe0;

  transition: all 0.3s ease;

  &:hover {
    background-color: #b3a4c6;
    color: #fff;
  }
`;

const MainContent: React.FC = () => {
  const options = {delay: 4000}; // Options
  const autoplayRoot = (emblaRoot: any) => emblaRoot.parentElement; // Root node
  const autoplay = Autoplay(options, autoplayRoot);

  const [viewportRef, embla] = useEmblaCarousel(
    {
      loop: true,
      skipSnaps: false,
    },
    [autoplay]
  );

  return (
    <Container className="embla__viewport" ref={viewportRef}>
      <Viewport className="embla__container">
        <Content className="embla__slide">
          <CharacterDescription>
            <CharacterNameContainer>
              <CharacterName>ARU</CharacterName>
              <CVName>CV. サト</CVName>
            </CharacterNameContainer>
            <ReadMore>
              <span>{t<string>("main.readMore")}</span>
            </ReadMore>
          </CharacterDescription>

          <CharacterImage>
            <img src={Aru} alt="aru" style={{height: "60vh"}} />
          </CharacterImage>
        </Content>
				<Content className="embla__slide">
          <CharacterDescription>
            <CharacterNameContainer>
              <CharacterName>ARU</CharacterName>
              <CVName>CV. サト</CVName>
            </CharacterNameContainer>
            <ReadMore>
              <span>{t<string>("main.readMore")}</span>
            </ReadMore>
          </CharacterDescription>

          <CharacterImage>
            <img src={Aru} alt="aru" style={{height: "60vh"}} />
          </CharacterImage>
        </Content>
      </Viewport>
    </Container>
  );
};

export default MainContent;
