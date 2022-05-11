import { t } from 'i18next';
import React from 'react';
import styled from 'styled-components';

import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import MachanFull from '../assets/machan-full.png';

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const Content = styled.div`
	max-width: 865px;
	display: flex;
	flex: 1;
	justify-content: space-around;
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
	return (
		<Container>
			<Content>
				<div id="machan">
					<CharacterImg src={MachanFull} alt="machan" />
				</div>
				<ProfileDescriptionContainer>
					<TagContainer>
						<TagTitle>{t<string>("voicebank.name")}</TagTitle>
						<TagDescription>{t<string>("fisher marine")}</TagDescription>
					</TagContainer>
					<TagContainer>
						<TagTitle>{t<string>("voicebank.age")}</TagTitle>
						<TagDescription>{t<string>("300歳")}</TagDescription>
					</TagContainer>
					<TagContainer>
						<TagTitle>{t<string>("voicebank.gender")}</TagTitle>
						<TagDescription>{t<string>("fish boy")}</TagDescription>
					</TagContainer>
					<TagContainer>
						<TagTitle>{t<string>("voicebank.cv")}</TagTitle>
						<TwitterTag href="https://twitter.com/kungom_"><TagDescription>{t<string>("kungom")}</TagDescription></TwitterTag>
					</TagContainer>
					<TagContainer>
						<TagTitle>{t<string>("voicebank.height")}</TagTitle>
						<TagDescription>{t<string>("140㎝")}</TagDescription>
					</TagContainer>
					<TagContainer>
						<TagTitle>{t<string>("voicebank.likes")}</TagTitle>
						<TagDescription>{t<string>("Gaia / Playing with humans / Sea")}</TagDescription>
					</TagContainer>
					<TagContainer>
						<TagTitle>{t<string>("voicebank.others")}</TagTitle>
						<TagDescription>{t<string>("He is the king of the deep sea")}</TagDescription>
					</TagContainer>
					<TagContainer>
					<TagTitle>{t<string>("voicebank.samples")}</TagTitle>
					<AudioPlayer
						src="http://example.com/audio.mp3"
						onPlay={() => console.log("onPlay")}
						showJumpControls={false}
						showDownloadProgress={true}
						showSkipControls={false}
						showFilledProgress={true}
						showFilledVolume={true}
						customProgressBarSection={
							[
								RHAP_UI.PROGRESS_BAR
							]
						}
						customAdditionalControls={
							[]
						}
						layout="horizontal"
					/>
					</TagContainer>
				</ProfileDescriptionContainer>
			</Content>
		</Container>
	);
}

export default VoiceBank;