import React, { useRef, useState } from 'react';

type AudioPlayerProps = {
    src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({src}) => {
    const audioRef = useRef(new Audio(src));

    const [trackProgress, setTrackProgress] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    
    return (
        <div>
            <button onClick={() => {
                if (isPlaying) {
                    audioRef.current.pause();
                    setIsPlaying(false);
                } else {
                    audioRef.current.play();
                    setIsPlaying(true);
                }
            }
        }>
                {isPlaying ? 'Pause' : 'Play'}
        </button>

        </div>
    );
}

export default AudioPlayer;