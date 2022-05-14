import i18next, { t } from "i18next";
import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";
import AnimatedText from "react-animated-text-content";

import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { motion } from "framer-motion";
import TextAnimation from "../components/TextAnimation";
import AudioPlayer from "../components/AudioPlayer";
import { Description, DescriptionTags } from "../assets/character/character";

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

const TwitterUsername = styled.span`
  margin-left: 10px;
`;

const TagDescription = styled.span`
flex-direction: row;
  padding-top: 10px;
  padding-bottom: 15px;
  padding-left: 30px;
  font-size: 1.1em;
`;

const DownloadButtonContainer = styled.div`
  margin-top: 10px;
`;

const DownloadButton = styled.a`
  border-radius: 100px;
  padding: 10px 30px;
  align-items: center;
  background-color: ${({ color }) => color};
  color: #FFF;
  text-decoration: none;

  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ color }) => `${color}B0`};
  }
`;


type VoiceBankProps = {
  characterDescription: Description;
};

const VoiceBank: React.FC<VoiceBankProps> = ({ characterDescription }) => {
  const containerRef = useRef(null);

  return characterDescription.is_vaild ? (
    <Container ref={containerRef}>
      <Content>
        <div id={characterDescription.id}>
          <CharacterImg src={characterDescription.fullsize_image} alt={characterDescription.id} />
        </div>
        <ProfileDescriptionContainer>
          {
            characterDescription.descriptions.map((description, index) => (
              <TagContainer>
                <TagTitle>{t<string>(`voicebank.${description.tag_name}`)}</TagTitle>
                <TextAnimation>
                  <TagDescription>
                    {description[i18next.language as keyof DescriptionTags]}
                  </TagDescription>
                </TextAnimation>
              </TagContainer>
            ))
          }
          <TagContainer>
            <TagTitle>{t<string>("voicebank.cv")}</TagTitle><TextAnimation>
              <TwitterTag href={`https://twitter.com/${characterDescription.cv_twitter}`}>
                <TagDescription>
                  <FontAwesomeIcon icon={faTwitter} />
                  <TwitterUsername>
                    @{characterDescription.cv_twitter}
                  </TwitterUsername>
                </TagDescription>
              </TwitterTag>
            </TextAnimation>
          </TagContainer>
          <TagContainer>
            <TagTitle>{t<string>("voicebank.samples")}</TagTitle>
            <AudioPlayer color={characterDescription.color} src={characterDescription.sample_path} />
          </TagContainer>
          <TagContainer>
            <TagTitle>{t<string>("voicebank.download")}</TagTitle>
            <TagDescription>
              <DownloadButtonContainer>
                <DownloadButton color={characterDescription.color} href={characterDescription.download_link}>
                  <FontAwesomeIcon icon={faArrowRight} style={{ marginRight: 10 }} />
                  {t<string>("voicebank.downloadFiles")}
                </DownloadButton>
              </DownloadButtonContainer>
            </TagDescription>
          </TagContainer>
          <TagContainer>
            <TagTitle>{t<string>(`voicebank.others`)}</TagTitle>
            {
              characterDescription.others.map((others, index) => (
                <TextAnimation>
                  <TagDescription>
                    {others[i18next.language as keyof DescriptionTags]}
                  </TagDescription>
                </TextAnimation>

              ))
            }
          </TagContainer>
        </ProfileDescriptionContainer>
      </Content>
    </Container>
  ) : (<div></div>);
};

export default VoiceBank;
