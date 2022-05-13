import { t } from "i18next";
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import AnimatedText from "react-animated-text-content";

import MachanFull from "../assets/machan-full.png";
import useOnScreen from "../hooks/useOnScreen";
import { motion } from "framer-motion";
import TextAnimation from "../components/TextAnimation";
import AudioPlayer from "../components/AudioPlayer";

import machanSample from "../assets/machan-sample.mp3";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 865px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 865px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const CharacterImg = styled.img`
  width: 50vw;
  max-width: 432.5px;

  @media (max-width: 865px) {
    width: 100vw;
  }
`;

const ProfileDescriptionContainer = styled.div`
  padding: 20px;
  flex: 1;

  @media (max-width: 865px) {
    width: calc(100% - 40px);
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`;

const TagTitle = styled.span`
  font-size: 1.4em;
  font-weight: bold;

  color: #333;
`;

const TwitterTag = styled.a`
  text-decoration: none;
  color: #333;
`;

const TagDescription = styled.span`
  padding-top: 10px;
  padding-bottom: 15px;
  padding-left: 30px;
  font-size: 1.1em;
`;

const VoiceBank: React.FC = () => {
  const containerRef = useRef(null);
  const isVisible = useOnScreen(containerRef);

  return (
    <Container ref={containerRef}>
      <Content>
        <div id="machan">
          <CharacterImg src={MachanFull} alt="machan" />
        </div>
        <ProfileDescriptionContainer>
          <TagContainer>
            <TagTitle>{t<string>("voicebank.name")}</TagTitle>
            <TextAnimation>
              <TagDescription>
                {t<string>("fisher marine")}
              </TagDescription>
            </TextAnimation>
          </TagContainer>
          <TagContainer>
            <TagTitle>{t<string>("voicebank.age")}</TagTitle>
            <TextAnimation>
              <TagDescription>
                {t<string>("300歳")}
              </TagDescription>
            </TextAnimation>
          </TagContainer>
          <TagContainer>
            <TagTitle>{t<string>("voicebank.gender")}</TagTitle><TextAnimation>
              <TagDescription>
                {t<string>("fish boy")}
              </TagDescription>
            </TextAnimation>
          </TagContainer>
          <TagContainer>
            <TagTitle>{t<string>("voicebank.cv")}</TagTitle><TextAnimation>
              <TwitterTag href="https://twitter.com/kungom_">
                <TagDescription>
                  {t<string>("kungom")}
                </TagDescription>
              </TwitterTag>
            </TextAnimation>
          </TagContainer>
          <TagContainer>
            <TagTitle>{t<string>("voicebank.height")}</TagTitle><TextAnimation>
              <TagDescription>
                {t<string>("140㎝")}
              </TagDescription></TextAnimation>
          </TagContainer>
          <TagContainer>
            <TagTitle>{t<string>("voicebank.likes")}</TagTitle><TextAnimation>
              <TagDescription>
                {t<string>("Gaia / Playing with humans / Sea")}
              </TagDescription></TextAnimation>
          </TagContainer>
          <TagContainer>
            <TagTitle>{t<string>("voicebank.others")}</TagTitle>
            <TextAnimation>
              <TagDescription>
                {t<string>("He is the king of the deep sea")}
              </TagDescription>
            </TextAnimation>
          </TagContainer>
          <TagContainer>
            <TagTitle>{t<string>("voicebank.samples")}</TagTitle>
            <AudioPlayer src={machanSample} />
          </TagContainer>
        </ProfileDescriptionContainer>
      </Content>
    </Container>
  );
};

export default VoiceBank;
