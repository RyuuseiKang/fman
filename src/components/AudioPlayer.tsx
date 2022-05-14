import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { faCirclePlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ProgressBar from './ProgressBar';

const Container = styled.div`
    flex-direction: row;
    border-radius: 5px;
    background-color: ${({ color }) => color};
    padding: 10px;
    margin: 10px 0px;

    align-items: center;
    display: flex;
`;

const PlayButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const Button = styled(FontAwesomeIcon)`
    font-size: 50px;
    color: #FFF;
    transition: all 0.3s ease;

    &:hover {
        color: #FFFFFFA0;
    }
`;

const ProgressBarContainer = styled.div`
    padding: 0px 10px;
    width: 100%;
`;

const CurrentTime = styled.div`
    margin-top: 5px;
    color: #FFF;
`;

type AudioPlayerProps = {
    src: string;
    color: string;
}

const formatTime: any = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes.toString()}:${seconds < 10 ? '0' : ''}${seconds.toString()}`;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, color }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);

    return (
        <Container color={color}>
            <audio
                onLoadedData={() => {
                    if (audioRef.current) {
                        setDuration(audioRef.current?.duration || 0);
                    }
                }}
                src={src}
                ref={audioRef}
                onTimeUpdate={() => {
                    setCurrentTime(audioRef.current?.currentTime || 0);
                }}
                onEnded={() => {
                    setIsPlaying(false);
                    setDuration(0);
                }}
                hidden
            />
            <PlayButton onClick={() => {
                if (isPlaying) {
                    audioRef.current?.pause();
                    setIsPlaying(false);
                } else {
                    audioRef.current?.play();
                    setIsPlaying(true);
                }
            }}>
                <Button icon={isPlaying ? faCirclePause : faCirclePlay} />
            </PlayButton>
            <ProgressBarContainer>
                <ProgressBar value={audioRef.current?.currentTime || 0} max={audioRef.current?.duration || 0} />
                <CurrentTime>
                    {formatTime(audioRef.current?.currentTime || 0)}
                    /
                    {formatTime(audioRef.current?.duration || 0)}
                </CurrentTime>
            </ProgressBarContainer>
        </Container>
    );
}

export default AudioPlayer;